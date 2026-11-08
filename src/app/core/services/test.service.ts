import { computed, inject, Injectable, signal } from '@angular/core';
import { QuestionWithCategory, TestData, TestMode, TestProgress, UserAnswer } from '../interfaces/questions.interfaces';
import { ProgressActions } from '../storages/progress/progress.action';
import { ProgressState } from '../storages/progress/progress.state';
import { Store } from '@ngxs/store';
import { QuestionsState } from '../storages/questions/questions.state';
import { QuestionsActions } from '../storages/questions/questions.action';
import { TestsActions } from '../storages/tests/tests.action';
import { TestsState } from '../storages/tests/tests.state';
import { Router } from '@angular/router';
import { countMistakes, EXAM_MAX_MISTAKES, EXAM_SIZE, isAnswered, isExamMode, shuffle } from '../utils/test.utils';

@Injectable({
    providedIn: 'root',
})
export class TestService {
    private readonly store = inject(Store);
    private readonly router = inject(Router);

    private readonly _mode = signal<TestMode>('exam');
    public readonly mode = this._mode.asReadonly();

    private categoryId = signal<number | undefined>(undefined);
    private questions = signal<QuestionWithCategory[]>([]);
    private finished = false;

    private readonly _loaded = signal(false);
    public readonly loaded = this._loaded.asReadonly();

    private _currentQuestionIndex = signal<number>(0);
    public readonly currentQuestionIndex = this._currentQuestionIndex.asReadonly();

    private _answers = signal<UserAnswer[]>([]);
    public readonly answers = this._answers.asReadonly();

    public readonly isExam = computed(() => isExamMode(this._mode()));

    public readonly questionsCount = computed(() => this.questions().length);

    public readonly currentQuestion = computed(() => this.questions()[this._currentQuestionIndex()] ?? null);

    public readonly currentAnswer = computed(() => this._answers()[this._currentQuestionIndex()] ?? null);

    public setAnswer(answer: number) {
        const question = this.currentQuestion();
        const index = this._currentQuestionIndex();

        // Відповідь остаточна: повторно відповісти на те саме питання не можна.
        if (this.finished || !question || isAnswered(this._answers()[index])) {
            return;
        }

        this._answers.update(answers => {
            const updatedAnswers = [...answers];

            updatedAnswers[index] = {
                questionId: question.id,
                categoryId: question.category,
                answerIndex: answer,
                isCorrect: question.answer === answer,
            };

            return updatedAnswers;
        });

        if (this.isExam() && countMistakes(this._answers()) > EXAM_MAX_MISTAKES) {
            this.finishTest();
            return;
        }

        this.saveProgress();
    }

    public nextQuestion() {
        if (this.finished) {
            return;
        }

        const answers = this.answers();
        const currentIndex = this.currentQuestionIndex();

        const nextUnanswered = answers.findIndex(
            (answer, index) => index > currentIndex && !isAnswered(answer)
        );

        if (nextUnanswered !== -1) {
            this.updateCurrentQuestionIndex(nextUnanswered);
            return;
        }

        const firstUnanswered = answers.findIndex((answer) => !isAnswered(answer));

        if (firstUnanswered !== -1) {
            this.updateCurrentQuestionIndex(firstUnanswered);
            return;
        }

        this.finishTest();
    }

    public updateCurrentQuestionIndex(index: number) {
        this._currentQuestionIndex.set(index);
        this.saveProgress();
    }

    public startTest(mode: TestMode, categoryId?: number) {
        this._mode.set(mode);
        this.categoryId.set(categoryId);
        this.finished = false;
        this._loaded.set(false);
        this.questions.set([]);
        this._answers.set([]);
        this._currentQuestionIndex.set(0);

        this.store.dispatch(new QuestionsActions.Load()).subscribe(() => {
            if (this.restoreProgress()) {
                this._loaded.set(true);
                return;
            }

            const questions = this.selectQuestions(mode, categoryId);

            this._answers.set(
                Array.from({ length: questions.length }, () => ({} as UserAnswer))
            );
            this.questions.set(questions);
            this._loaded.set(true);
        });
    }

    public finishTest() {
        if (this.finished) {
            return;
        }
        this.finished = true;

        this.clearProgress();

        const testData = this.getTestData();

        if (!testData.questions.length) {
            this.router.navigateByUrl(this._mode() === 'learning' ? '/category-list' : '/');
            return;
        }

        this.store.dispatch(new TestsActions.Save(testData)).subscribe(() => {
            this.router.navigateByUrl(`/result/${testData.id}`)
        });
    }

    public getTestData(): TestData {
        let questions = this.questions();
        let answers = this.answers();

        // Поза іспитом зберігаємо лише питання, на які встигли відповісти.
        if (!this.isExam()) {
            const answeredIndexes = answers
                .map((answer, index) => (isAnswered(answer) ? index : -1))
                .filter((index) => index !== -1);
            questions = answeredIndexes.map((index) => questions[index]);
            answers = answeredIndexes.map((index) => answers[index]);
        }

        return {
            id: new Date().getTime(),
            mode: this._mode(),
            categoryId: this.categoryId(),
            questions,
            answers,
        };
    }

    /** Прогрес зберігаємо лише для «Усі питання» по темі: іспит має таймер і проходиться за раз. */
    private get progressCategoryId(): number | undefined {
        return this._mode() === 'learning' ? this.categoryId() : undefined;
    }

    private saveProgress() {
        const categoryId = this.progressCategoryId;

        if (this.finished || categoryId === undefined || !this._loaded()) {
            return;
        }

        // Поки немає жодної відповіді — зберігати нічого (і нема чого продовжувати).
        if (!this._answers().some(isAnswered)) {
            this.clearProgress();
            return;
        }

        const progress: TestProgress = {
            categoryId,
            questionIds: this.questions().map((question) => question.id),
            answers: this._answers(),
            currentQuestionIndex: this._currentQuestionIndex(),
            updatedAt: Date.now(),
        };

        this.store.dispatch(new ProgressActions.Save(progress));
    }

    private clearProgress() {
        const categoryId = this.progressCategoryId;

        if (categoryId !== undefined) {
            this.store.dispatch(new ProgressActions.Clear(categoryId));
        }
    }

    /** Відновлює незавершене проходження теми. Повертає false, якщо відновлювати нічого. */
    private restoreProgress(): boolean {
        const categoryId = this.progressCategoryId;

        if (categoryId === undefined) {
            return false;
        }

        const progress = this.store.selectSnapshot(ProgressState.getByCategory(categoryId));

        if (!progress) {
            return false;
        }

        const categoryQuestions = this.store.selectSnapshot(QuestionsState.getByCategory(categoryId));
        const byId = new Map(categoryQuestions.map((question) => [question.id, question]));

        const questions: QuestionWithCategory[] = [];
        const answers: UserAnswer[] = [];
        let currentQuestionIndex = 0;

        // Питання, яких уже немає в базі, відкидаємо; індекс поточного зсуваємо відповідно.
        progress.questionIds.forEach((id, index) => {
            const question = byId.get(id);
            if (!question) {
                return;
            }
            if (index <= progress.currentQuestionIndex) {
                currentQuestionIndex = questions.length;
            }
            questions.push(question);
            answers.push(progress.answers[index] ?? ({} as UserAnswer));
            byId.delete(id);
        });

        // Нові питання, що з'явились у темі після збереження, — в кінець.
        const added = shuffle([...byId.values()]);
        questions.push(...added);
        answers.push(...added.map(() => ({} as UserAnswer)));

        if (!answers.some(isAnswered)) {
            this.clearProgress();
            return false;
        }

        this.questions.set(questions);
        this._answers.set(answers);
        this._currentQuestionIndex.set(currentQuestionIndex);

        return true;
    }

    private selectQuestions(mode: TestMode, categoryId?: number): QuestionWithCategory[] {
        const byCategory = () =>
            categoryId === undefined ? [] : this.store.selectSnapshot(QuestionsState.getByCategory(categoryId));

        switch (mode) {
            case 'exam':
                return shuffle(this.store.selectSnapshot(QuestionsState.getAll)).slice(0, EXAM_SIZE);
            case 'categoryExam':
                return shuffle(byCategory()).slice(0, EXAM_SIZE);
            case 'learning':
                return shuffle(byCategory());
            case 'mistakes': {
                const refs = this.store.selectSnapshot(TestsState.getMistakes);
                return shuffle(this.store.selectSnapshot(QuestionsState.getByRefs(refs)));
            }
        }
    }
}

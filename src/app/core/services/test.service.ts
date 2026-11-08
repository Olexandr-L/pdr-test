import { computed, inject, Injectable, signal } from '@angular/core';
import { QuestionWithCategory, TestData, TestMode, UserAnswer } from '../interfaces/questions.interfaces';
import { Store } from '@ngxs/store';
import { QuestionsState } from '../storages/questions/questions.state';
import { QuestionsActions } from '../storages/questions/questions.action';
import { TestsActions } from '../storages/tests/tests.action';
import { TestsState } from '../storages/tests/tests.state';
import { Router } from '@angular/router';
import { countMistakes, EXAM_MAX_MISTAKES, EXAM_SIZE, isAnswered, isExamMode } from '../utils/test.utils';

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

    public currentQuestion = computed(() => {
        const questions = this.questions();
        const index = this._currentQuestionIndex();
        return questions[index] || null;
    });

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
        }
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
            this._currentQuestionIndex.set(nextUnanswered);
            return;
        }

        const firstUnanswered = answers.findIndex((answer) => !isAnswered(answer));

        if (firstUnanswered !== -1) {
            this._currentQuestionIndex.set(firstUnanswered);
            return;
        }

        this.finishTest();
    }

    public updateCurrentQuestionIndex(index: number) {
        this._currentQuestionIndex.set(index);
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

    private selectQuestions(mode: TestMode, categoryId?: number): QuestionWithCategory[] {
        switch (mode) {
            case 'exam':
                return this.store.selectSnapshot(QuestionsState.getRandomQuestions(EXAM_SIZE));
            case 'categoryExam':
                return this.store.selectSnapshot(QuestionsState.getQuestionsByCategory(categoryId!, EXAM_SIZE));
            case 'learning':
                return this.store.selectSnapshot(QuestionsState.getQuestionsByCategory(categoryId!));
            case 'mistakes': {
                const refs = this.store.selectSnapshot(TestsState.getMistakes);
                return this.store.selectSnapshot(QuestionsState.getQuestionsByRefs(refs));
            }
        }
    }
}

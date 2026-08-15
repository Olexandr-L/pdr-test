import { computed, inject, Injectable, signal } from '@angular/core';
import { QuestionWithCategory, TestData, UserAnswer } from '../interfaces/questions.interfaces';
import { Store } from '@ngxs/store';
import { QuestionsState } from '../storages/questions/questions.state';
import { QuestionsActions } from '../storages/questions/questions.action';
import { TestsActions } from '../storages/tests/tests.action';
import { Router } from '@angular/router';

const DEFAULT_TEST_SIZE = 20;

@Injectable({
    providedIn: 'root',
})
export class TestService {
    private readonly store = inject(Store);
    private readonly router = inject(Router);

    private testSize = signal<number>(DEFAULT_TEST_SIZE);
    private questions = signal<QuestionWithCategory[]>([]);

    private _currentQuestionIndex = signal<number>(0);
    public readonly currentQuestionIndex = computed(() => this._currentQuestionIndex());

    private _answers = signal<UserAnswer[]>([]);
    public readonly answers = computed(() => this._answers());

    public currentQuestion = computed(() => {
        const questions = this.questions();
        const index = this._currentQuestionIndex();
        return questions[index] || null;
    });

    public setAnswer(answer: number) {
        const question = this.currentQuestion();
        const index = this._currentQuestionIndex();

        this._answers.update(answers => {
            const updatedAnswers = [...answers];

            updatedAnswers[index] = {
                questionId: question?.id ?? 0,
                categoryId: question?.category ?? 0,
                answerIndex: answer,
                isCorrect: question?.answer === answer,
            };

            return updatedAnswers;
        });
    }

    public nextQuestion() {
        const answers = this.answers();
        const currentIndex = this.currentQuestionIndex();

        const nextUnanswered = answers.findIndex(
            ({ answerIndex }, index) =>
                index > currentIndex && answerIndex === undefined
        );

        if (nextUnanswered !== -1) {
            this._currentQuestionIndex.set(nextUnanswered);
            return;
        }

        const firstUnanswered = answers.findIndex(
            ({ answerIndex }) => answerIndex === undefined
        );

        if (firstUnanswered !== -1) {
            this._currentQuestionIndex.set(firstUnanswered);
            return;
        }

        this.finishTest();
    }

    public updateCurrentQuestionIndex(index: number) {
        this._currentQuestionIndex.set(index);
    }

    public startTest() {
        this.testSize.set(DEFAULT_TEST_SIZE);
        this._answers.set(
            Array.from({ length: DEFAULT_TEST_SIZE }, () => ({} as UserAnswer))
        );

        this.store.dispatch(new QuestionsActions.Load()).subscribe(() => {
            const questions = this.store.selectSnapshot(QuestionsState.getRandomQuestions(this.testSize()));
            this.questions.set(questions);
        });
    }

    public finishTest() {
        const testData = this.getTestData();

        this.store.dispatch(new TestsActions.Save(testData)).subscribe(() => {
            this.router.navigateByUrl(`/result/${testData.id}`)
        });
    }

    public getTestData(): TestData {
        return {
            id: new Date().getTime(),
            questions: this.questions(),
            answers: this.answers(),
        };

    }
}

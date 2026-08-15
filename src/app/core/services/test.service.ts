import { computed, inject, Injectable, signal } from '@angular/core';
import { QuestionWithCategory, UserAnswer } from '../interfaces/questions.interfaces';
import { Store } from '@ngxs/store';
import { QuestionsState } from '../storages/questions/questions.state';
import { QuestionsActions } from '../storages/questions/questions.action';

const DEFAULT_TEST_SIZE = 20;

@Injectable({
    providedIn: 'root',
})
export class TestService {
    private readonly store = inject(Store);

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
        const answers = this.answers();
        
        console.log(answer, question?.answer);

        answers[this._currentQuestionIndex()] = {
            questionId: question?.id ?? 0,
            categoryId: question?.category ?? 0,
            answerIndex: answer,
            isCorrect: question?.answer === answer,
        };

        this._answers.set(answers);
    }

    public nextQuestion() {
        this._currentQuestionIndex.update((index) => index + 1);
    }

    public updateCurrentQuestionIndex(index: number) {
        this._currentQuestionIndex.set(index);
    }

    public startTest() {
        this.testSize.set(DEFAULT_TEST_SIZE);
        this._answers.set(new Array(DEFAULT_TEST_SIZE).fill({} as UserAnswer));

        this.store.dispatch(new QuestionsActions.Load()).subscribe(() => {
            const questions = this.store.selectSnapshot(QuestionsState.getRandomQuestions(this.testSize()));
            this.questions.set(questions);
        });
    }
}

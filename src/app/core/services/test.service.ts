import { computed, inject, Injectable, signal } from '@angular/core';
import { QuestionWithCategory } from '../interfaces/questions.interfaces';
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
    private currentQuestionIndex = signal<number>(0);

    public currentQuestion = computed(() => {
        const questions = this.questions();
        const index = this.currentQuestionIndex();
        return questions[index] || null;
    });

    public nextQuestion() {
        this.currentQuestionIndex.update((index) => index + 1);
    }

    public updateCurrentQuestionIndex(index: number) {
        this.currentQuestionIndex.set(index);
    }

    public startTest() {
        this.testSize.set(DEFAULT_TEST_SIZE);

        this.store.dispatch(new QuestionsActions.Load()).subscribe(() => {
            const questions = this.store.selectSnapshot(QuestionsState.getRandomQuestions(this.testSize()));
            this.questions.set(questions);
        });
    }
}

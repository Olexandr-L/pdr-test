import { inject, Injectable } from '@angular/core';
import { QuestionWithCategory } from '@app/core/interfaces/questions.interfaces';
import { QuestionsService } from '@app/core/services/questions.service';
import { Action, createSelector, Selector, State } from '@ngxs/store';
import { QuestionsActions } from './questions.action';
import { of, tap } from 'rxjs';

@State<QuestionWithCategory[]>({
    name: 'questions',
    defaults: []
})
@Injectable()
export class QuestionsState {

    private readonly questionsService = inject(QuestionsService);

    @Selector()
    static getAllQuestions(state: QuestionWithCategory[]) {
        return state;
    }

    @Selector()
    static getQuestionsCount(state: QuestionWithCategory[]) {
        return state.length;
    }

    static getQuestionsByCategory(category: number) {
        return createSelector([QuestionsState], (state: QuestionWithCategory[]) => {
            return state.filter(question => question.category === category);
        });
    }

    static getRandomQuestions(size: number) {
        return createSelector([QuestionsState], (state: QuestionWithCategory[]) => {
            const shuffled = [...(state ?? [])].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, size);
        });
    }

    static getQuestion(category: number, id: number) {
        return createSelector([QuestionsState], (state: QuestionWithCategory[]) => {
            return state.find(question => question.category === category && question.id === id);
        });
    }

    @Action(QuestionsActions.Load)
    loadQuestions({ setState, getState }: any) {
        const isLoaded = getState().length > 0;
        if (isLoaded) {
            return of(null);
        }

        return this.questionsService.loadQuestions().pipe(tap((questions) => {
            setState(questions);
        }));
    }
}
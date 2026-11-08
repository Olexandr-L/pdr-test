import { inject, Injectable } from '@angular/core';
import { QuestionRef, QuestionWithCategory } from '@app/core/interfaces/questions.interfaces';
import { QuestionsService } from '@app/core/services/questions.service';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { QuestionsActions } from './questions.action';
import { of, tap } from 'rxjs';

const questionKey = (categoryId: number, questionId: number) => `${categoryId}:${questionId}`;

@State<QuestionWithCategory[]>({
    name: 'questions',
    defaults: []
})
@Injectable()
export class QuestionsState {

    private readonly questionsService = inject(QuestionsService);

    @Selector()
    static getAll(state: QuestionWithCategory[]) {
        return state;
    }

    static getByCategory(category: number) {
        return createSelector([QuestionsState], (state: QuestionWithCategory[]) =>
            state.filter(question => question.category === category)
        );
    }

    static getByRefs(refs: QuestionRef[]) {
        return createSelector([QuestionsState], (state: QuestionWithCategory[]) => {
            const keys = new Set(refs.map(({ categoryId, questionId }) => questionKey(categoryId, questionId)));
            return state.filter(question => keys.has(questionKey(question.category, question.id)));
        });
    }

    @Action(QuestionsActions.Load)
    loadQuestions({ getState, setState }: StateContext<QuestionWithCategory[]>) {
        if (getState().length > 0) {
            return of(null);
        }

        return this.questionsService.loadQuestions().pipe(tap(setState));
    }
}

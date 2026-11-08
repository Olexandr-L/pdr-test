import { inject, Injectable } from '@angular/core';
import { QuestionRef, QuestionWithCategory } from '@app/core/interfaces/questions.interfaces';
import { QuestionsService } from '@app/core/services/questions.service';
import { shuffle } from '@app/core/utils/test.utils';
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

    static getQuestionsByCategory(category: number, size?: number) {
        return createSelector([QuestionsState], (state: QuestionWithCategory[]) => {
            const filtered = shuffle((state ?? []).filter(question => question.category === category));

            if (size) {
                return filtered.slice(0, size);
            }
            return filtered;
        });
    }

    static getRandomQuestions(size: number) {
        return createSelector([QuestionsState], (state: QuestionWithCategory[]) => {
            return shuffle(state ?? []).slice(0, size);
        });
    }

    static getQuestionsByRefs(refs: QuestionRef[]) {
        return createSelector([QuestionsState], (state: QuestionWithCategory[]) => {
            const keys = new Set(refs.map(({ categoryId, questionId }) => `${categoryId}:${questionId}`));
            return shuffle((state ?? []).filter(question => keys.has(`${question.category}:${question.id}`)));
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

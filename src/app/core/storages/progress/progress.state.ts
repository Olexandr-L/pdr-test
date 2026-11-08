import { Injectable } from '@angular/core';
import { TestProgress } from '@app/core/interfaces/questions.interfaces';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { ProgressActions } from './progress.action';

/** Key is the topic id. */
export type ProgressStateModel = Record<number, TestProgress>;

@State<ProgressStateModel>({
    name: 'progress',
    defaults: {}
})
@Injectable()
export class ProgressState {

    @Selector()
    static getAll(state: ProgressStateModel) {
        return state;
    }

    static getByCategory(categoryId: number) {
        return createSelector([ProgressState], (state: ProgressStateModel) => state[categoryId] ?? null);
    }

    @Action(ProgressActions.Save)
    save({ getState, setState }: StateContext<ProgressStateModel>, { progress }: ProgressActions.Save) {
        setState({ ...getState(), [progress.categoryId]: progress });
    }

    @Action(ProgressActions.Clear)
    clear({ getState, setState }: StateContext<ProgressStateModel>, { categoryId }: ProgressActions.Clear) {
        if (!(categoryId in getState())) {
            return;
        }
        const { [categoryId]: _, ...rest } = getState();
        setState(rest);
    }
}

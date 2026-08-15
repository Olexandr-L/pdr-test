import { Injectable } from '@angular/core';
import { TestData } from '@app/core/interfaces/questions.interfaces';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { TestsActions } from './tests.action';

@State<TestData[]>({
    name: 'tests',
    defaults: []
})
@Injectable()
export class TestsState {

    @Selector()
    static getAllTests(state: TestData[]) {
        return state;
    }

    static getTestById(id: number) {
        return createSelector([TestsState], (state: TestData[]) => {
            return state.filter(test => test.id === id);
        });
    }


    @Action(TestsActions.Save)
    saveTest(ctx: StateContext<TestData[]>, action: TestsActions.Save) {
        const state = ctx.getState();

        ctx.setState([
            ...state,
            action.test,
        ])
    }
}
import { Injectable } from '@angular/core';
import { TestData } from '@app/core/interfaces/questions.interfaces';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { TestsActions } from './tests.action';
import { getMistakeRefs } from '@app/core/utils/test.utils';

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

    @Selector()
    static getMistakes(state: TestData[]) {
        return getMistakeRefs(state);
    }

    static getTestById(id: number) {
        return createSelector([TestsState], (state: TestData[]) =>
            state.find(test => test.id === id) ?? null
        );
    }

    @Action(TestsActions.Save)
    saveTest({ getState, setState }: StateContext<TestData[]>, { test }: TestsActions.Save) {
        setState([...getState(), test]);
    }
}
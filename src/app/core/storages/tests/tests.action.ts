import { TestData } from "@app/core/interfaces/questions.interfaces";

const ACTION_SCOPE = '[Tests]';

export namespace TestsActions {
    export class Save {
        static readonly type = `${ACTION_SCOPE} Save`;

        constructor(public test: TestData) { }
    }

}
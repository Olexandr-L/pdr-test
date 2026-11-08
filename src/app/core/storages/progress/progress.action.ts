import { TestProgress } from '@app/core/interfaces/questions.interfaces';

const ACTION_SCOPE = '[Progress]';

export namespace ProgressActions {
    export class Save {
        static readonly type = `${ACTION_SCOPE} Save`;

        constructor(public progress: TestProgress) { }
    }

    export class Clear {
        static readonly type = `${ACTION_SCOPE} Clear`;

        constructor(public categoryId: number) { }
    }
}

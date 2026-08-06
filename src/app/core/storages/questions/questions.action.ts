const ACTION_SCOPE = '[Questions]';

export namespace QuestionsActions {
    export class Load {
        static readonly type = `${ACTION_SCOPE} Load`;
    }

    export function LoadQuestions(LoadQuestions: any): (target: import("./questions.state").QuestionsState, propertyKey: "") => void {
        throw new Error('Function not implemented.');
    }
}
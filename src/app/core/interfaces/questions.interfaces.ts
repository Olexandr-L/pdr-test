export type QuestionOptionsKeys = '1' | '2' | '3' | '4' | '5';

export type QuestionOptions = {
    [key in QuestionOptionsKeys]?: string;
};

export interface Question extends QuestionOptions {
    id: number;
    question: string;
    image: boolean;
    answer: number | null;
}

export interface QuestionWithCategory extends Question {
    category: number;
}

export interface QuestionCategory {
    id: number;
    questions: Question[];
}

export interface UserAnswer {
    questionId: number;
    categoryId: number;
    answerIndex: number;
    isCorrect: boolean;
}
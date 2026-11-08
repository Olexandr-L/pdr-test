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

export type TestMode = 'exam' | 'categoryExam' | 'learning' | 'mistakes';

export interface TestData {
    id: number;
    /** Відсутній у записах, створених до появи режимів. Див. getTestMode(). */
    mode?: TestMode;
    categoryId?: number;
    questions: QuestionWithCategory[];
    /** Для пропущених питань тут порожній об'єкт (без answerIndex). */
    answers: UserAnswer[];
}

export interface QuestionRef {
    categoryId: number;
    questionId: number;
}

/** Незавершене проходження «Усі питання» по темі. */
export interface TestProgress {
    categoryId: number;
    /** Порядок питань (після перемішування), щоб відновити його як був. */
    questionIds: number[];
    /** Вирівняно з questionIds; для питань без відповіді — порожній об'єкт. */
    answers: UserAnswer[];
    currentQuestionIndex: number;
    updatedAt: number;
}

export type QuestionOptionsKeys = '1' | '2' | '3' | '4' | '5';

export type QuestionOptions = {
    [key in QuestionOptionsKeys]?: string;
};

export interface Question extends QuestionOptions {
    id: number;
    question: string;
    image: boolean;
    answer: number | null;
    /** Explanation shown after answering outside an exam. Optional: not every question has one. */
    explanation?: string;
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
    /** Missing in records created before modes were introduced. See getTestMode(). */
    mode?: TestMode;
    categoryId?: number;
    questions: QuestionWithCategory[];
    /** For skipped questions this is an empty object (no answerIndex). */
    answers: UserAnswer[];
}

export interface QuestionRef {
    categoryId: number;
    questionId: number;
}

/** An unfinished "All questions" run for a topic. */
export interface TestProgress {
    categoryId: number;
    /** Question order (after shuffling), so it can be restored as it was. */
    questionIds: number[];
    /** Aligned with questionIds; an empty object for unanswered questions. */
    answers: UserAnswer[];
    currentQuestionIndex: number;
    updatedAt: number;
}

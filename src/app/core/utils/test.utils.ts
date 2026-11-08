import { QuestionRef, TestData, TestMode, UserAnswer } from '../interfaces/questions.interfaces';

export const EXAM_SIZE = 20;
export const EXAM_MINUTES = 20;
export const EXAM_MAX_MISTAKES = 2;

export const TEST_MODE_LABELS: Record<TestMode, string> = {
    exam: 'Іспит',
    categoryExam: 'Іспит по темі',
    learning: 'Навчання',
    mistakes: 'Помилки',
};

export function isExamMode(mode: TestMode): boolean {
    return mode === 'exam' || mode === 'categoryExam';
}

/** Old records have no mode: up to 20 questions is treated as an exam, more as practice. */
export function getTestMode(test: TestData): TestMode {
    return test.mode ?? (test.questions.length <= EXAM_SIZE ? 'exam' : 'learning');
}

export function isAnswered(answer: UserAnswer | null | undefined): boolean {
    return answer?.answerIndex !== undefined && answer?.answerIndex !== null;
}

export function countMistakes(answers: UserAnswer[]): number {
    return answers.filter((a) => isAnswered(a) && !a.isCorrect).length;
}

export interface TestSummary {
    mode: TestMode;
    correct: number;
    mistakes: number;
    skipped: number;
    /** null for modes without a pass/fail outcome. */
    passed: boolean | null;
}

export function summarizeTest(test: TestData): TestSummary {
    const mode = getTestMode(test);
    const correct = test.answers.filter((a) => isAnswered(a) && a.isCorrect).length;
    const mistakes = countMistakes(test.answers);
    const skipped = test.questions.length - correct - mistakes;

    return {
        mode,
        correct,
        mistakes,
        skipped,
        // Skipped questions in an exam count as mistakes.
        passed: isExamMode(mode) ? mistakes + skipped <= EXAM_MAX_MISTAKES : null,
    };
}

const refKey = (categoryId: number, questionId: number) => `${categoryId}:${questionId}`;

/**
 * The mistakes list is derived from history: a question is included if the latest answer
 * to it (in any mode) was wrong. Skipped questions are not counted.
 */
export function getMistakeRefs(tests: TestData[]): QuestionRef[] {
    const lastResult = new Map<string, { ref: QuestionRef; isCorrect: boolean }>();

    [...tests]
        .sort((a, b) => a.id - b.id)
        .forEach((test) => {
            test.answers.forEach((answer) => {
                if (!isAnswered(answer)) {
                    return;
                }
                const { categoryId, questionId, isCorrect } = answer;
                lastResult.set(refKey(categoryId, questionId), {
                    ref: { categoryId, questionId },
                    isCorrect,
                });
            });
        });

    return [...lastResult.values()].filter(({ isCorrect }) => !isCorrect).map(({ ref }) => ref);
}

export function shuffle<T>(items: T[]): T[] {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

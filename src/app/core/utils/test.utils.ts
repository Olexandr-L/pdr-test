import { QuestionRef, TestData, TestMode, UserAnswer } from '../interfaces/questions.interfaces';

/** Krok 2 (general medicine): 150 tasks, about one minute per task. */
export const EXAM_SIZE = 150;
export const EXAM_SECONDS_PER_QUESTION = 60;
/** Share of correct answers needed to pass. The official threshold is set every year; adjust if it changes. */
export const EXAM_PASS_RATIO = 0.605;

/** Letters used for answer options, as in the Krok booklets. */
export const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];

export function optionLetter(number: number): string {
    return OPTION_LETTERS[number - 1] ?? String(number);
}

/** Exam length in minutes for the given number of questions (a topic or a small bank can have fewer than EXAM_SIZE). */
export function examMinutes(questionsCount: number): number {
    return Math.max(1, Math.ceil((questionsCount * EXAM_SECONDS_PER_QUESTION) / 60));
}

/** How many wrong or skipped answers still pass an exam of this size. */
export function examMaxMistakes(questionsCount: number): number {
    return questionsCount - Math.ceil(questionsCount * EXAM_PASS_RATIO);
}

export function formatPercent(value: number): string {
    return `${String(Math.round(value * 1000) / 10).replace(".", ",")}%`;
}

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
    /** Share of correct answers among all questions of the test (0..1). */
    score: number;
    /** null for modes without a pass/fail outcome. */
    passed: boolean | null;
}

export function summarizeTest(test: TestData): TestSummary {
    const mode = getTestMode(test);
    const correct = test.answers.filter((a) => isAnswered(a) && a.isCorrect).length;
    const mistakes = countMistakes(test.answers);
    const total = test.questions.length;
    const skipped = total - correct - mistakes;
    const score = total ? correct / total : 0;

    return {
        mode,
        correct,
        mistakes,
        skipped,
        score,
        // Skipped questions in an exam count as mistakes.
        passed: isExamMode(mode) ? score >= EXAM_PASS_RATIO : null,
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

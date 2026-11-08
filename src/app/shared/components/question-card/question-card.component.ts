import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import {
    QuestionOptionsKeys,
    QuestionWithCategory,
    UserAnswer,
} from '@app/core/interfaces/questions.interfaces';
import { isAnswered } from '@app/core/utils/test.utils';
import { AnswerOptionComponent, AnswerOptionView } from '../answer-option/answer-option.component';

const OPTION_KEYS: QuestionOptionsKeys[] = ['1', '2', '3', '4', '5'];

@Component({
    selector: 'app-question-card',
    imports: [AnswerOptionComponent],
    templateUrl: './question-card.component.html',
    styleUrl: './question-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent {
    public readonly question = input.required<QuestionWithCategory | null>();
    public readonly answer = input.required<UserAnswer | null>();
    /** false in an exam: the selected option is only highlighted, without "correct/incorrect". */
    public readonly reveal = input<boolean>(true);
    /** Result review: answering is disabled, the correct answer is shown even for skipped questions. */
    public readonly readonly = input<boolean>(false);
    /** Show the explanation block once the question is answered. */
    public readonly explain = input<boolean>(false);

    public readonly setAnswer = output<number>();

    public readonly showExplanation = computed(() => this.explain() && isAnswered(this.answer()));

    public readonly correctOption = computed(() => {
        const correct = this.question()?.answer;
        return this.options().find((option) => option.number === correct) ?? null;
    });

    public readonly options = computed<AnswerOptionView[]>(() => {
        const question = this.question();
        if (!question) {
            return [];
        }

        return OPTION_KEYS.flatMap((key) => {
            const text = question[key];
            return text ? [{ number: Number(key), text }] : [];
        });
    });
}

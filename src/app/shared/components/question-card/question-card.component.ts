import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import {
    QuestionOptionsKeys,
    QuestionWithCategory,
    UserAnswer,
} from '@app/core/interfaces/questions.interfaces';
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
    /** false на іспиті: вибраний варіант лише виділяється, без «правильно/неправильно». */
    public readonly reveal = input<boolean>(true);
    /** Перегляд результату: відповідати не можна, правильну відповідь видно і для пропущених. */
    public readonly readonly = input<boolean>(false);

    public readonly setAnswer = output<number>();

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

import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserAnswer } from '@app/core/interfaces/questions.interfaces';
import { isAnswered } from '@app/core/utils/test.utils';
export interface AnswerOptionView {
    /** Номер варіанта (1-based), саме його зберігаємо як answerIndex. */
    number: number;
    text: string;
}

type OptionState = 'correct' | 'incorrect' | 'help' | 'selected' | '';

@Component({
    selector: 'app-answer-option',
    imports: [MatButtonModule],
    templateUrl: './answer-option.component.html',
    styleUrl: './answer-option.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerOptionComponent {
    public readonly option = input.required<AnswerOptionView>();
    public readonly correctNumber = input.required<number | null>();
    public readonly answer = input.required<UserAnswer | null>();
    public readonly reveal = input<boolean>(true);
    public readonly readonly = input<boolean>(false);

    public readonly choose = output<number>();

    private readonly isAnswered = computed(() => isAnswered(this.answer()));

    public readonly isDisabled = computed(() => this.readonly() || this.isAnswered());

    public readonly state = computed<OptionState>(() => {
        const answer = this.answer();
        const number = this.option().number;
        const isSelected = this.isAnswered() && answer?.answerIndex === number;

        if (!this.reveal()) {
            return isSelected ? 'selected' : '';
        }
        if (isSelected) {
            return answer?.isCorrect ? 'correct' : 'incorrect';
        }
        if ((this.isAnswered() || this.readonly()) && this.correctNumber() === number) {
            return 'help';
        }
        return '';
    });
}

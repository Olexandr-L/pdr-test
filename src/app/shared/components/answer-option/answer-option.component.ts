import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { QuestionWithCategory, UserAnswer } from '@app/core/interfaces/questions.interfaces';
import { isAnswered } from '@app/core/utils/test.utils';

@Component({
    selector: 'app-answer-option',
    imports: [MatButtonModule, NgClass],
    templateUrl: './answer-option.component.html',
    styleUrl: './answer-option.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerOptionComponent {
    public readonly question = input.required<QuestionWithCategory>();
    public readonly currentAnswer = input.required<UserAnswer>();
    public readonly index = input.required<number>();
    /** false на іспиті: вибраний варіант лише виділяється, без «правильно/неправильно». */
    public readonly reveal = input<boolean>(true);
    /** Перегляд результату: відповідати не можна, правильна відповідь видна і для пропущених. */
    public readonly readonly = input<boolean>(false);

    public readonly setAnswer = output<number>();

    private readonly options = computed(() => {
        const question = this.question();

        return [
            question[1],
            question[2],
            question[3],
            question[4],
            question[5]
        ].filter((option) => !!option)
    })

    public readonly optionIndex = computed(() => this.index() + 1);

    public readonly currentOption = computed(() => {
        const index = this.index();
        const options = this.options();

        return options[index]
    });
    public readonly correctOption = computed(() => this.question().answer);

    public readonly isAnswered = computed(() => isAnswered(this.currentAnswer()));
    public readonly isSelected = computed(() => this.currentAnswer()?.answerIndex === this.optionIndex());
    public readonly isCorrect = computed(() => this.isSelected() && this.currentAnswer().isCorrect);
    public readonly isIncorrect = computed(() => this.isSelected() && !this.currentAnswer().isCorrect);

    public readonly isDisabled = computed(() => this.readonly() || this.isAnswered());

    public readonly btnClass = computed(() => {
        if (!this.reveal()) {
            return this.isSelected() ? 'selected' : '';
        }
        if (this.isCorrect()) {
            return 'correct';
        }
        if (this.isIncorrect()) {
            return 'incorrect';
        }
        if ((this.isAnswered() || this.readonly()) && this.correctOption() === this.optionIndex()) {
            return 'help'
        }

        return ''
    })
}

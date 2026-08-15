import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { QuestionWithCategory, UserAnswer } from '@app/core/interfaces/questions.interfaces';

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

    public readonly isAnswered = computed(() => !!this.currentAnswer().answerIndex);
    public readonly isCorrect = computed(() => this.currentAnswer().isCorrect && this.currentAnswer().answerIndex === this.optionIndex());
    public readonly isIncorrect = computed(() => !this.currentAnswer().isCorrect && this.currentAnswer().answerIndex === this.optionIndex());


    public readonly btnClass = computed(() => {
        if (this.isCorrect()) {
            return 'correct';
        }
        if (this.isIncorrect()) {
            return 'incorrect';
        }
        if (this.isAnswered() && this.correctOption() === this.optionIndex()) {
            return 'help'
        }

        return ''
    })
}

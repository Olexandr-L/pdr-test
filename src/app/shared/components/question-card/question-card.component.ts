import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { QuestionWithCategory, UserAnswer } from '@app/core/interfaces/questions.interfaces';
import { AnswerOptionComponent } from '../answer-option/answer-option.component';

@Component({
    selector: 'app-question-card',
    imports: [AnswerOptionComponent],
    templateUrl: './question-card.component.html',
    styleUrl: './question-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent {
    public readonly question = input.required<QuestionWithCategory>();
    public readonly answer = input.required<UserAnswer>();

    public readonly setAnswer = output<number>();

    public options = computed(() => {
        const question = this.question();
        if (!question) return [];

        return ['1', '2', '3', '4', '5'].filter(key => !!question[key as keyof typeof question]);
    });
}

import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UserAnswer } from '@app/core/interfaces/questions.interfaces';

@Component({
    selector: 'app-question-switcher',
    imports: [MatButtonModule],
    templateUrl: './question-switcher.component.html',
    styleUrl: './question-switcher.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionSwitcherComponent {
    public readonly answers = input.required<UserAnswer[]>();
    public readonly currentQuestionIndex = input.required<number>();

    public readonly setQuestionIndex = output<number>();
}

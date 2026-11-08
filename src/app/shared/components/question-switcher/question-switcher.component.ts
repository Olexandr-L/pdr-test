import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonAppearance, MatButtonModule } from '@angular/material/button';
import { UserAnswer } from '@app/core/interfaces/questions.interfaces';
import { isAnswered } from '@app/core/utils/test.utils';

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
    /** false in an exam: show only "answered / not yet", without ✅/❌. */
    public readonly reveal = input<boolean>(true);

    public readonly setQuestionIndex = output<number>();

    public buttonAppearance(index: number): MatButtonAppearance {
        if (index === this.currentQuestionIndex()) {
            return 'filled';
        }
        if (!this.reveal() && isAnswered(this.answers()[index])) {
            return 'tonal';
        }
        return 'outlined';
    }
}

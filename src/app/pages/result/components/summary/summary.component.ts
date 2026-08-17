import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { UserAnswer } from '@app/core/interfaces/questions.interfaces';

@Component({
    selector: 'app-summary',
    imports: [],
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
    public readonly answers = input.required<UserAnswer[]>();


    public readonly correctAnswersCount = computed(() => {
        return this.answers().filter(a => a.isCorrect).length
    })

    public readonly mistakesAnswersCount = computed(() => {
        return this.answers().filter(a => !a.isCorrect).length
    })
}

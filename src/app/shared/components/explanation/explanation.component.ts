import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Store } from '@ngxs/store';
import { QuestionWithCategory } from '@app/core/interfaces/questions.interfaces';
import { RulesService } from '@app/core/services/rules.service';
import { QuestionsActions } from '@app/core/storages/questions/questions.action';
import { QuestionsState } from '@app/core/storages/questions/questions.state';

/** Explanation text and rule excerpts for a question. */
@Component({
    selector: 'app-explanation',
    templateUrl: './explanation.component.html',
    styleUrl: './explanation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExplanationComponent {
    private readonly rulesService = inject(RulesService);
    private readonly allQuestions = inject(Store).selectSignal(QuestionsState.getAll);

    public readonly question = input.required<QuestionWithCategory>();

    /**
     * Saved results keep a copy of the question without explanations,
     * so the current version of the question is used when available.
     */
    private readonly current = computed(() => {
        const question = this.question();
        return (
            this.allQuestions().find((item) => item.category === question.category && item.id === question.id) ??
            question
        );
    });

    public readonly explanation = computed(() => this.current().explanation ?? '');

    public readonly rules = computed(() => this.rulesService.resolve(this.current().rules ?? []));

    constructor() {
        inject(Store).dispatch(new QuestionsActions.Load());
        this.rulesService.load();
    }
}

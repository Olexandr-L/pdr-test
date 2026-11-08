import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { TestsState } from '@app/core/storages/tests/tests.state';
import { ActivatedRoute } from '@angular/router';
import { QuestionSwitcherComponent } from '@app/shared/components/question-switcher/question-switcher.component';
import { SummaryComponent } from './components/summary/summary.component';
import { QuestionCardComponent } from '@app/shared/components/question-card/question-card.component';

@Component({
	selector: 'app-result',
	imports: [QuestionSwitcherComponent, QuestionCardComponent, SummaryComponent],
	templateUrl: './result.component.html',
	styleUrl: './result.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
	private readonly store = inject(Store);
	private readonly activatedRoute = inject(ActivatedRoute);

	public readonly testData = this.store.selectSnapshot(
		TestsState.getTestById(+this.activatedRoute.snapshot.params['id'])
	);

	public readonly currentQuestionIndex = signal<number>(0);

	public readonly answers = this.testData?.answers ?? [];

	public readonly currentQuestion = computed(() => this.testData?.questions[this.currentQuestionIndex()] ?? null);
	public readonly currentAnswer = computed(() => this.answers[this.currentQuestionIndex()] ?? null);

	public setQuestionIndex(index: number) {
		this.currentQuestionIndex.set(index);
	}
}

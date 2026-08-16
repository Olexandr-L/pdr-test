import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { TestData } from '@app/core/interfaces/questions.interfaces';
import { TestsState } from '@app/core/storages/tests/tests.state';
import { ActivatedRoute } from '@angular/router';
import { QuestionSwitcherComponent } from '@app/shared/components/question-switcher/question-switcher.component';
import { SummaryComponent } from './components/summary/summary.component';
import { QuestionCardComponent } from '@app/shared/components/question-card/question-card.component';

@Component({
	selector: 'app-result',
	imports: [MatButtonModule, QuestionSwitcherComponent, QuestionCardComponent, SummaryComponent],
	templateUrl: './result.component.html',
	styleUrl: './result.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnInit {

	private readonly store = inject(Store);
	private activatedRoute = inject(ActivatedRoute);

	public readonly testData = signal<TestData | null>(null);

	public readonly currentQuestionIndex = signal<number>(0);

	public currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);

	public options = computed(() => {
		const question = this.currentQuestion();
		if (!question) return [];

		return ['1', '2', '3', '4', '5'].filter(key => !!question[key as keyof typeof question]);
	});

	public answers = computed(() => this.testData()?.answers ?? []);
	public questions = computed(() => this.testData()?.questions ?? []);


	public readonly currentAnswer = computed(() => {
		const index = this.currentQuestionIndex();
		const answers = this.answers();
		return answers[index] || null;
	});

	ngOnInit(): void {
		const id = this.activatedRoute.snapshot.params['id'];
		const testData = this.store.selectSnapshot(TestsState.getTestById(+id));
		this.testData.set(testData);
	}

	public setQuestionIndex(index: number) {
		this.currentQuestionIndex.set(index);
	}
}

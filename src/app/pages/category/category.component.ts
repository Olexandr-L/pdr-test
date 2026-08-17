import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '@app/core/services/test.service';
import { QuestionCardComponent } from '@app/shared/components/question-card/question-card.component';
import { QuestionSwitcherComponent } from '@app/shared/components/question-switcher/question-switcher.component';

@Component({
	selector: 'app-category',
	imports: [MatButtonModule, QuestionSwitcherComponent, QuestionCardComponent],
	templateUrl: './category.component.html',
	styleUrl: './category.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
	private readonly testService = inject(TestService);
	private readonly activatedRoute = inject(ActivatedRoute);

	public currentQuestion = this.testService.currentQuestion;
	public currentQuestionIndex = this.testService.currentQuestionIndex;

	public answers = this.testService.answers;

	public readonly currentAnswer = computed(() => {
		const index = this.currentQuestionIndex();
		const answers = this.answers();
		return answers[index] || null;
	});

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params['id'];
		this.testService.startTest(+id, true);
	}

	public onSetAnswer(answer: number) {
		this.testService.setAnswer(answer);
		this.testService.nextQuestion();
	}

	public setQuestionIndex(index: number) {
		this.testService.updateCurrentQuestionIndex(index);
	}
}

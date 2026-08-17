import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '@app/core/services/test.service';
import { QuestionCardComponent } from '@app/shared/components/question-card/question-card.component';
import { QuestionSwitcherComponent } from '@app/shared/components/question-switcher/question-switcher.component';
import { TimerComponent } from '@app/shared/components/timer/timer.component';

@Component({
	selector: 'app-test',
	imports: [MatButtonModule, TimerComponent, QuestionSwitcherComponent, QuestionCardComponent],
	templateUrl: './test.component.html',
	styleUrl: './test.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
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

	public readonly showTimer = signal<boolean>(true)

	ngOnInit() {
		const id = this.activatedRoute.snapshot.params['id'];

		if (id) {
			this.showTimer.set(false);
			this.testService.startTest(+id);
		} else {
			this.showTimer.set(true);
			this.testService.startTest();
		}
	}

	public onSetAnswer(answer: number) {
		this.testService.setAnswer(answer);
		this.testService.nextQuestion();
	}

	public setQuestionIndex(index: number) {
		this.testService.updateCurrentQuestionIndex(index);
	}

	public onTimeEnd() {
		this.testService.finishTest();
	}
}

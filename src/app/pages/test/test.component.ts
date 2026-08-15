import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TestService } from '@app/core/services/test.service';
import { TimerComponent } from './components/timer/timer.component';
import { QuestionSwitcherComponent } from './components/question-switcher/question-switcher.component';

@Component({
	selector: 'app-test',
	imports: [MatButtonModule, TimerComponent, QuestionSwitcherComponent, RouterLink],
	templateUrl: './test.component.html',
	styleUrl: './test.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
	private readonly testService = inject(TestService);

	public currentQuestion = this.testService.currentQuestion;
	public currentQuestionIndex = this.testService.currentQuestionIndex;

	public options = computed(() => {
		const question = this.currentQuestion();
		if (!question) return [];

		return ['1', '2', '3', '4', '5'].map((key) => ({
			key: +key,
			value: question[key as keyof typeof question] as string,
		})).filter(o => !!o.value);
	});

	public answers = this.testService.answers;

	public readonly currentAnswer = computed(() => {
		const index = this.currentQuestionIndex();
		const answers = this.answers();
		return answers[index] || null;
	});

	ngOnInit() {
		this.testService.startTest();
	}

	public setAnswer(answer: number) {
		this.testService.setAnswer(answer);
		this.testService.nextQuestion();
	}

	public setQuestionIndex(index: number) {
		this.testService.updateCurrentQuestionIndex(index);
	}

	onTimeEnd() {
		// Handle time end event here
		console.log('Time is up!');
	}
}

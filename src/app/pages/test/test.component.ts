import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TestService } from '@app/core/services/test.service';
import { TimerComponent } from './components/timer/timer.component';
import { QuestionSwitcherComponent } from './components/question-switcher/question-switcher.component';
import { AnswerOptionComponent } from './components/answer-option/answer-option.component';

@Component({
	selector: 'app-test',
	imports: [MatButtonModule, TimerComponent, QuestionSwitcherComponent, AnswerOptionComponent],
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

		return ['1', '2', '3', '4', '5'].filter(key => !!question[key as keyof typeof question]);
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

	public onSetAnswer(answer: number) {
		this.testService.setAnswer(answer);
		this.testService.nextQuestion();
	}

	public setQuestionIndex(index: number) {
		this.testService.updateCurrentQuestionIndex(index);
	}

	public onTimeEnd() {
		// Handle time end event here
		console.log('Time is up!');
	}
}

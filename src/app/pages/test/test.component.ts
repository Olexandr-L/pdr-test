import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TestMode } from '@app/core/interfaces/questions.interfaces';
import { TestService } from '@app/core/services/test.service';
import { EXAM_MAX_MISTAKES, EXAM_MINUTES, isAnswered } from '@app/core/utils/test.utils';
import { ConfirmDialogComponent, ConfirmDialogData } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { QuestionCardComponent } from '@app/shared/components/question-card/question-card.component';
import { QuestionSwitcherComponent } from '@app/shared/components/question-switcher/question-switcher.component';
import { TimerComponent } from '@app/shared/components/timer/timer.component';

/** A single page for all modes; the mode is set in the route data. */
@Component({
	selector: 'app-test',
	imports: [MatButtonModule, RouterLink, TimerComponent, QuestionSwitcherComponent, QuestionCardComponent],
	templateUrl: './test.component.html',
	styleUrl: './test.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
	private readonly testService = inject(TestService);
	private readonly activatedRoute = inject(ActivatedRoute);
	private readonly dialog = inject(MatDialog);

	public readonly examMinutes = EXAM_MINUTES;

	public readonly isExam = this.testService.isExam;
	public readonly mode = this.testService.mode;
	public readonly loaded = this.testService.loaded;
	public readonly questionsCount = this.testService.questionsCount;

	public readonly currentQuestion = this.testService.currentQuestion;
	public readonly currentQuestionIndex = this.testService.currentQuestionIndex;
	public readonly currentAnswer = this.testService.currentAnswer;
	public readonly answers = this.testService.answers;

	ngOnInit() {
		const mode: TestMode = this.activatedRoute.snapshot.data['mode'];
		const id = this.activatedRoute.snapshot.params['id'];

		this.testService.startTest(mode, id ? +id : undefined);
	}

	public onSetAnswer(answer: number) {
		this.testService.setAnswer(answer);
		this.testService.nextQuestion();
	}

	public setQuestionIndex(index: number) {
		this.testService.updateCurrentQuestionIndex(index);
	}

	public onPrev() {
		this.setQuestionIndex(this.currentQuestionIndex() - 1);
	}

	public onNext() {
		this.setQuestionIndex(this.currentQuestionIndex() + 1);
	}

	public onTimeEnd() {
		this.testService.finishTest();
	}

	public onFinish() {
		if (!this.isExam()) {
			this.testService.finishTest();
			return;
		}

		const skipped = this.answers().filter((answer) => !isAnswered(answer)).length;
		const data: ConfirmDialogData = {
			title: 'Завершити іспит?',
			message: skipped
				? `Без відповіді: ${skipped}. Пропущені питання рахуються як помилки (допустимо не більше ${EXAM_MAX_MISTAKES}).`
				: 'Ви відповіли на всі питання.',
			confirmText: 'Завершити',
		};

		this.dialog
			.open(ConfirmDialogComponent, { data })
			.afterClosed()
			.subscribe((confirmed) => {
				if (confirmed) {
					this.testService.finishTest();
				}
			});
	}
}

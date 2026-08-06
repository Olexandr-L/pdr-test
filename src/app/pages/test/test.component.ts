import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TestService } from '@app/core/services/test.service';

@Component({
  selector: 'app-test',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent implements OnInit {
  private readonly testService = inject(TestService);

  public currentQuestion = this.testService.currentQuestion;
  public options = computed(() => {
    const question = this.currentQuestion();
    if (!question) return [];

    return ['1', '2', '3', '4', '5'].map((key) => ({
      key: +key,
      value: question[key as keyof typeof question] as string,
    })).filter(o => !!o.value);
  });

  public answers = this.testService.answers;

  ngOnInit() {
    this.testService.startTest();
  }

  public setAnswer(answer: number) {
    this.testService.setAnswer(answer);
  }

  public setQuestionIndex(index: number) {
    this.testService.updateCurrentQuestionIndex(index);
  }

  public nextQuestion() {
    this.testService.nextQuestion();
  }
}

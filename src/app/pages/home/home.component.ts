import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuestionsService } from '@core/services/questions.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  private questionsService = inject(QuestionsService);

  constructor() {
    this.questionsService.loadQuestions();
  }
}

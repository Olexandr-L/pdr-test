import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EXAM_MINUTES, EXAM_SIZE } from '@app/core/utils/test.utils';
import { TestsState } from '@app/core/storages/tests/tests.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly store = inject(Store);

  private readonly mistakes = this.store.selectSignal(TestsState.getMistakes);

  public readonly mistakesCount = computed(() => this.mistakes().length);

  public readonly examSize = EXAM_SIZE;
  public readonly examMinutes = EXAM_MINUTES;
}

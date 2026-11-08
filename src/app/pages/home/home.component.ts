import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TestsState } from '@app/core/storages/tests/tests.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly store = inject(Store);

  private readonly mistakes = this.store.selectSignal(TestsState.getMistakes);

  public readonly mistakesCount = computed(() => this.mistakes().length);
}

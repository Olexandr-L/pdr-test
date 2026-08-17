import { ChangeDetectionStrategy, Component, computed, effect, input, output } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
	selector: 'app-timer',
	imports: [MatProgressBarModule],
	templateUrl: './timer.component.html',
	styleUrl: './timer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
	public readonly minutes = input<number>(20);

	public readonly timeEnd = output<void>();

	private readonly initTime = Date.now();
	private readonly totalSeconds = computed(() => this.minutes() * 60);
	private readonly tick = toSignal(interval(1000), { initialValue: 0 });

	public readonly remainingSeconds = computed(() => {
		const tickValue = this.tick(); // Update the tick value to trigger re-computation

		const elapsedSeconds = (Date.now() - this.initTime) / 1000;
		return Math.max(this.totalSeconds() - elapsedSeconds, 0);
	});

	public readonly progress = computed(() => {
		return 100 - (this.remainingSeconds() / this.totalSeconds()) * 100;
	});

	public readonly displayTime = computed(() => {
		const remaining = this.remainingSeconds();
		const minutes = Math.floor(remaining / 60);
		const seconds = Math.floor(remaining % 60);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	});

	constructor() {
		effect(() => {
			if (this.remainingSeconds() <= 0) {
				this.timeEnd.emit();
			}
		});
	}
}

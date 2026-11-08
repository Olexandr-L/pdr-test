import {
    afterRenderEffect,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    input,
    output,
    signal,
    viewChildren,
} from '@angular/core';
import { MatButtonAppearance, MatButtonModule } from '@angular/material/button';
import { UserAnswer } from '@app/core/interfaces/questions.interfaces';
import { isAnswered } from '@app/core/utils/test.utils';

/** How far (px) the mouse must move before a press turns into a drag instead of a click. */
const DRAG_THRESHOLD = 5;

@Component({
    selector: 'app-question-switcher',
    imports: [MatButtonModule],
    templateUrl: './question-switcher.component.html',
    styleUrl: './question-switcher.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.dragging]': 'dragging()',
        '(pointerdown)': 'onPointerDown($event)',
        '(pointermove)': 'onPointerMove($event)',
        '(pointerup)': 'onPointerUp($event)',
        '(pointercancel)': 'onPointerUp($event)',
        '(wheel)': 'onWheel($event)',
    },
})
export class QuestionSwitcherComponent {
    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly items = viewChildren('item', { read: ElementRef });

    public readonly answers = input.required<UserAnswer[]>();
    public readonly currentQuestionIndex = input.required<number>();
    /** false in an exam: show only "answered / not yet", without ✅/❌. */
    public readonly reveal = input<boolean>(true);

    public readonly setQuestionIndex = output<number>();

    protected readonly dragging = signal(false);

    /** The first scroll is instant (no animation on page open), the following ones are smooth. */
    private initialScrollDone = false;
    /** Mouse drag state; touch screens use native swipe scrolling. */
    private dragStart: { pointerId: number; x: number; scrollLeft: number } | null = null;
    /** Set after a drag so the click that follows mouseup does not switch the question. */
    private suppressClick = false;

    constructor() {
        // Keep the current question centered in the row.
        afterRenderEffect(() => {
            const item: HTMLElement | undefined = this.items()[this.currentQuestionIndex()]?.nativeElement;
            if (item) {
                this.scrollToCenter(item);
            }
        });

        // Swallow the click right after a drag, before it reaches the button.
        this.host.nativeElement.addEventListener(
            'click',
            (event) => {
                if (this.suppressClick) {
                    event.stopPropagation();
                    event.preventDefault();
                    this.suppressClick = false;
                }
            },
            { capture: true },
        );
    }

    public buttonAppearance(index: number): MatButtonAppearance {
        if (index === this.currentQuestionIndex()) {
            return 'filled';
        }
        if (!this.reveal() && isAnswered(this.answers()[index])) {
            return 'tonal';
        }
        return 'outlined';
    }

    protected onPointerDown(event: PointerEvent) {
        if (event.pointerType !== 'mouse' || event.button !== 0) {
            return;
        }
        this.suppressClick = false;
        this.dragStart = { pointerId: event.pointerId, x: event.clientX, scrollLeft: this.host.nativeElement.scrollLeft };
    }

    protected onPointerMove(event: PointerEvent) {
        if (!this.dragStart || event.pointerId !== this.dragStart.pointerId) {
            return;
        }
        // The button was released outside the row before the drag started.
        if (!(event.buttons & 1)) {
            this.dragStart = null;
            return;
        }
        const container = this.host.nativeElement;
        const dx = event.clientX - this.dragStart.x;

        if (!this.dragging()) {
            if (Math.abs(dx) < DRAG_THRESHOLD) {
                return;
            }
            this.dragging.set(true);
            container.setPointerCapture(event.pointerId);
        }
        container.scrollLeft = this.dragStart.scrollLeft - dx;
    }

    protected onPointerUp(event: PointerEvent) {
        if (!this.dragStart || event.pointerId !== this.dragStart.pointerId) {
            return;
        }
        if (this.dragging()) {
            this.suppressClick = true;
            this.dragging.set(false);
        }
        this.dragStart = null;
    }

    /** A vertical mouse wheel scrolls the row horizontally; at the row's edges the page scrolls as usual. */
    protected onWheel(event: WheelEvent) {
        const container = this.host.nativeElement;
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) || container.scrollWidth <= container.clientWidth) {
            return;
        }
        const maxScroll = container.scrollWidth - container.clientWidth;
        const atStart = container.scrollLeft <= 0 && event.deltaY < 0;
        const atEnd = container.scrollLeft >= maxScroll - 1 && event.deltaY > 0;
        if (atStart || atEnd) {
            return;
        }
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    }

    /** Scrolls only the row horizontally (unlike scrollIntoView, the page itself never moves). */
    private scrollToCenter(item: HTMLElement) {
        const container = this.host.nativeElement;
        if (container.scrollWidth <= container.clientWidth) {
            return;
        }

        const containerRect = container.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const left =
            container.scrollLeft + (itemRect.left - containerRect.left) - (container.clientWidth - itemRect.width) / 2;

        container.scrollTo({ left, behavior: this.initialScrollDone ? 'smooth' : 'instant' });
        this.initialScrollDone = true;
    }
}

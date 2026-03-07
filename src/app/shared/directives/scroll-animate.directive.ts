import { Directive, ElementRef, inject, input, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[scrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private observer?: IntersectionObserver;

  readonly delay = input(0);

  ngAfterViewInit(): void {
    const nativeEl = this.el.nativeElement as HTMLElement;
    const delayMs = this.delay();

    nativeEl.style.opacity = '0';
    nativeEl.style.transform = 'translateY(30px)';
    nativeEl.style.transition = `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          this.observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

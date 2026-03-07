import { Injectable, signal, DestroyRef, inject } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly destroyRef = inject(DestroyRef);

  private readonly _scrollProgress = signal(0);
  private readonly _activeSection = signal('');
  private readonly _scrollDirection = signal<'up' | 'down'>('up');
  private readonly _isScrolled = signal(false);

  readonly scrollProgress = this._scrollProgress.asReadonly();
  readonly activeSection = this._activeSection.asReadonly();
  readonly scrollDirection = this._scrollDirection.asReadonly();
  readonly isScrolled = this._isScrolled.asReadonly();

  private lastScrollY = 0;
  private sections: string[] = ['about', 'experience', 'projects', 'contact'];

  init(): void {
    fromEvent(window, 'scroll')
      .pipe(throttleTime(16, undefined, { leading: true, trailing: true }), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.onScroll());
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private onScroll(): void {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

    this._scrollProgress.set(progress);
    this._isScrolled.set(scrollY > 50);
    this._scrollDirection.set(scrollY > this.lastScrollY ? 'down' : 'up');
    this.lastScrollY = scrollY;

    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const offset = window.innerHeight * 0.35;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(this.sections[i]);
      if (el && el.getBoundingClientRect().top <= offset) {
        this._activeSection.set(this.sections[i]);
        return;
      }
    }

    this._activeSection.set('');
  }
}

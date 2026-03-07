import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';

  private readonly _isDark = signal(this.getInitialTheme());

  readonly isDark = this._isDark.asReadonly();

  constructor() {
    effect(() => {
      const dark = this._isDark();
      document.documentElement.classList.toggle('dark', dark);
      localStorage.setItem(this.STORAGE_KEY, dark ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this._isDark.update((v) => !v);
  }

  private getInitialTheme(): boolean {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}

import { Injectable, signal, computed } from '@angular/core';
import { Lang, Translations } from '../models/portfolio.model';
import { TRANSLATIONS } from '../data/translations';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly STORAGE_KEY = 'portfolio-lang';

  private readonly _lang = signal<Lang>(this.getInitialLang());

  readonly lang = this._lang.asReadonly();
  readonly translations = computed<Translations>(() => TRANSLATIONS[this._lang()]);

  setLang(lang: Lang): void {
    this._lang.set(lang);
    document.documentElement.lang = lang;
    localStorage.setItem(this.STORAGE_KEY, lang);
  }

  toggle(): void {
    this.setLang(this._lang() === 'en' ? 'fr' : 'en');
  }

  private getInitialLang(): Lang {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored === 'en' || stored === 'fr') return stored;

    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'fr' ? 'fr' : 'en';
  }
}

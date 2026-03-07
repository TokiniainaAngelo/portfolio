import { Component, inject, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle.component';
import { TranslationService } from '../../core/services/translation.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly scroll = inject(ScrollService);

  readonly navLinks = computed(() => {
    const t = this.i18n.translations().nav;
    return [
      { id: 'about', label: t.about, num: '01' },
      { id: 'experience', label: t.experience, num: '02' },
      { id: 'projects', label: t.projects, num: '03' },
      { id: 'contact', label: t.contact, num: '04' },
    ];
  });

  navigate(event: Event, sectionId: string): void {
    event.preventDefault();
    this.scroll.scrollTo(sectionId);
  }
}

import { Component, inject } from '@angular/core';
import { TranslationService } from '../core/services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly t = this.i18n.translations;
}

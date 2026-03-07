import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly t = this.i18n.translations;
  protected readonly year = new Date().getFullYear();
}

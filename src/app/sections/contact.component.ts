import { Component, inject } from '@angular/core';
import { TranslationService } from '../core/services/translation.service';
import { ScrollAnimateDirective } from '../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly t = this.i18n.translations;
}

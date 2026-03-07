import { Component, inject } from '@angular/core';
import { TranslationService } from '../core/services/translation.service';
import { ScrollAnimateDirective } from '../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly t = this.i18n.translations;

  protected readonly technologies = [
    'Angular', 'TypeScript', 'NestJS', 'Node.js',
    'MongoDB', 'RabbitMQ', 'Docker', 'AWS',
  ];
}

import { Component, inject } from '@angular/core';
import { TranslationService } from '../core/services/translation.service';
import { ScrollAnimateDirective } from '../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  private readonly i18n = inject(TranslationService);
  protected readonly t = this.i18n.translations;
}

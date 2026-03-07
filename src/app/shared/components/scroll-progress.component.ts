import { Component, inject } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.component.html',
})
export class ScrollProgressComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly Math = Math;
}

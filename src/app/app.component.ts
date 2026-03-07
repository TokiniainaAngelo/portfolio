import { Component, inject, OnInit, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollProgressComponent } from './shared/components/scroll-progress.component';
import { ScrollService } from './core/services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollProgressComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private readonly scroll = inject(ScrollService);

  protected readonly mouseX = signal(0);
  protected readonly mouseY = signal(0);
  protected readonly easterEgg = signal(false);
  private konamiSequence: string[] = [];
  private readonly konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA',
  ];

  ngOnInit(): void {
    this.scroll.init();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    this.konamiSequence.push(event.code);

    if (this.konamiSequence.length > this.konamiCode.length) {
      this.konamiSequence.shift();
    }

    if (this.konamiSequence.join(',') === this.konamiCode.join(',')) {
      this.easterEgg.set(true);
      this.konamiSequence = [];
      setTimeout(() => this.easterEgg.set(false), 4000);
    }
  }
}

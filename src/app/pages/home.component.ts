import { Component } from '@angular/core';
import { HeroComponent } from '../sections/hero.component';
import { AboutComponent } from '../sections/about.component';
import { ProjectsComponent } from '../sections/projects.component';
import { ExperienceComponent } from '../sections/experience.component';
import { ContactComponent } from '../sections/contact.component';
import { NavbarComponent } from '../shared/components/navbar.component';
import { FooterComponent } from '../shared/components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

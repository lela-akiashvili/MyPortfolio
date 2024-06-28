import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <router-outlet></router-outlet>
  `,
  styles: `
  `,
})
export class AppComponent {
  title = 'portfolio';
}

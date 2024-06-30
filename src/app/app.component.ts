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
 <main>
    <router-outlet></router-outlet>
 </main> 
  `,
  styles: `
main {
    min-height: 100vh;
    padding: 1.5rem;
    max-width: fit-content;
    margin: auto;
  }
  `,
})
export class AppComponent {
  title = 'portfolio';
}

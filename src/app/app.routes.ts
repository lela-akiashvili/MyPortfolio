import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(
        (m) => m.ProjectsComponent,
      ),
  },
  {
    path: 'bio',
    loadComponent: () =>
      import('./features/bio/bio.component').then((m) => m.BioComponent),
  },
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: '**', redirectTo: 'home' }
]; 
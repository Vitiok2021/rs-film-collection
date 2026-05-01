import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { FilmDetails } from './pages/film-details/film-details';
import { NotFoundPage } from './components/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'films/:id', component: FilmDetails },
  { path: '**', component: NotFoundPage },
];

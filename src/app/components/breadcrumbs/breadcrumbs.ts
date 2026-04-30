import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FilmsService } from '../../services/film';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  filmService = inject(FilmsService);
  breadcrumbs = computed(() => {
    const title = this.filmService.currentFilmTitle();
    const isAbout = this.filmService.isAboutPage();
    if (isAbout) {
      return [{ label: 'About', url: '' }];
    }

    const base = [{ label: 'Home', url: '/' }];
    if (title) {
      base.push({ label: title, url: '' });
    }
    return base;
  });
}

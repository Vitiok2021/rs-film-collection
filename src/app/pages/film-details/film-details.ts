import { Component, computed, effect, inject, input, OnDestroy } from '@angular/core';
import { FilmsService } from '../../services/film';
import { Router, RouterLink } from '@angular/router';
import { DurationPipe } from '../../pipes/duration-pipe';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails implements OnDestroy {
  filmService = inject(FilmsService);
  id = input.required<string>();
  router = inject(Router);
  film = computed(() => {
    return this.filmService.getFilmById(this.id());
  });

  constructor() {
    effect(
      () => {
        if (!this.film()) {
          this.router.navigate(['/404']);
          return;
        }
        const title = this.film()?.title;
        if (title) {
          this.filmService.currentFilmTitle.set(title);
        }
      },
      { allowSignalWrites: true },
    );
  }
  ngOnDestroy() {
    this.filmService.currentFilmTitle.set(null);
  }
}

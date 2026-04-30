import { Component, computed, effect, inject, input, OnDestroy } from '@angular/core';
import { FilmsService } from '../../services/film';
import { RouterLink } from '@angular/router';
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
  film = computed(() => {
    return this.filmService.getFilmById(this.id());
  });
  constructor() {
    effect(
      () => {
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

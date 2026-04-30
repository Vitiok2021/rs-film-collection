import { Component, computed, inject, input } from '@angular/core';
import { FilmsService } from '../../services/film';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails {
  filmService = inject(FilmsService);
  id = input.required<string>();
  film = computed(() => {
    return this.filmService.getFilmById(this.id());
  });
}

import { Component, computed, inject, input, Input } from '@angular/core';
import { FilmInterface } from '../../interfaces/film';
import { RouterLink } from '@angular/router';
import { FilmsService } from '../../services/film';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  filmService = inject(FilmsService);
  film = input.required<FilmInterface>();

  onFavoriteClick(event: Event, id: number) {
    event.preventDefault();
    event.stopPropagation();
    this.filmService.toggleFavorite(id);
  }
  isFavorite = computed(() => {
    return this.filmService.favoriteIds().includes(this.film().id);
  });
}

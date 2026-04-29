import { Component, inject } from '@angular/core';
import { FilmsService } from '../../services/film';
import { FilmCard } from '../../components/film-card/film-card';

@Component({
  selector: 'app-home',
  imports: [FilmCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  filmService = inject(FilmsService);

  film = this.filmService.films;
}

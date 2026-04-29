import { Component, inject } from '@angular/core';
import { Film } from '../../services/film';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  filmService = inject(Film);

  film = this.filmService.films;
}

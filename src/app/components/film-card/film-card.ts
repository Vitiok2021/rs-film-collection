import { Component, input, Input } from '@angular/core';
import { FilmInterface } from '../../interfaces/film';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<FilmInterface>();
}

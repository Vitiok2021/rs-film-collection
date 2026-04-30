import { Component, input, Input } from '@angular/core';
import { FilmInterface } from '../../interfaces/film';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<FilmInterface>();
}

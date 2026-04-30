import { Component, inject } from '@angular/core';
import { Autofocus } from '../../directives/autofocus';
import { FilmsService } from '../../services/film';

@Component({
  selector: 'app-search',
  imports: [Autofocus],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  filmService = inject(FilmsService);
  onSearch(event: any) {
    const text = (event.target as HTMLInputElement).value;
    this.filmService.searchItem.set(text);
  }
}

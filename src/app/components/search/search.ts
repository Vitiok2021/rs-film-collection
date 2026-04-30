import { Component } from '@angular/core';
import { Autofocus } from '../../directives/autofocus';

@Component({
  selector: 'app-search',
  imports: [Autofocus],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {}

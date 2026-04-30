import { Component, inject, OnDestroy } from '@angular/core';
import { FilmsService } from '../../services/film';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnDestroy {
  filmService = inject(FilmsService);
  constructor() {
    this.filmService.isAboutPage.set(true);
  }
  ngOnDestroy(): void {
    this.filmService.isAboutPage.set(false);
  }
}

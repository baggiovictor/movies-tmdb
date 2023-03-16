import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-home />
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'movies-tmdb';
}

import { Component, OnInit, inject } from '@angular/core';
import { GetMoviesService } from '../../core/services/get-movies.service';

@Component({
  selector: 'app-home',
  template: ``,
  styles: [``],
})
export class HomeComponent implements OnInit {
  moviesService = inject(GetMoviesService);

  ngOnInit() {
    this.moviesService.getMoviesTrending().subscribe((movies) => {
      console.log(movies);
    });
  }
}

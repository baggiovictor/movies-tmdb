import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  private http = inject(HttpClient);

  getMoviesTrending(): Observable<any[]> {
    return this.http.get<any[]>(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${environment.apiKey}`
    );
  }
}

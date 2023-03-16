import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environment';
import { HttpResponse } from '../interfaces/http-reponse.interface';

interface Movie {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  private http = inject(HttpClient);

  getMoviesTrending(): Observable<HttpResponse<Movie[]>> {
    return this.http.get<HttpResponse<Movie[]>>(
      `${environment.baseApiUrl}/trending/all/day?api_key=${environment.apiKey}`
    );
  }
}

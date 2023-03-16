interface IURL {
  movies: string;
}

export class MoviesConfigService {
  public static readonly urls: Readonly<IURL> = {
    movies: 'https://api.themoviedb.org/3/',
  };
}

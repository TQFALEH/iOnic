import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  image = 'https://image.tmdb.org/t/p/w400/'
  baseUrl= 'https://api.themoviedb.org/3'
  apiKey='30e6601bbeac68a19270926dc96ff984'
  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
    );
  }
  getMovieDetails(id: any) {
    return this.http.get(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }
}

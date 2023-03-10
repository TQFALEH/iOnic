import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  constructor(
    private servise: MovieService,
    private loadingController: LoadingController
  ) {}
  movies: any = [];
  currentPage = 1;
  image = 'https://image.tmdb.org/t/p/'
  baseUrl= 'https://api.themoviedb.org/3'
  apiKey='30e6601bbeac68a19270926dc96ff984'
  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies(event?:InfiniteScrollCustomEvent) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.servise.getTopRatedMovies(this.currentPage).subscribe((res) => {
      loading.dismiss();
      console.log(res.results);
      this.movies.push(...res.results) ;
      event?.target.complete();
    });
  }

  loadMore(e: any) {
    this.currentPage++;
    this.loadMovies(e)
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  constructor(private servise: MovieService, private route: ActivatedRoute) {}
 
  movie: any = [];
  image = 'https://image.tmdb.org/t/p/w400/'
  baseUrl= 'https://api.themoviedb.org/3'
  apiKey='30e6601bbeac68a19270926dc96ff984'

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.servise.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
      console.log(this.movie);
    });
  }
openHomePage(){
  window.open(this.movie.homepage)
}

}

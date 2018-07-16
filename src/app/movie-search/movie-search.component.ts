import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  title = 'app';
  movieName: string;
  movies: any[] = [];
  //i = 0;
  noResults:boolean = false;
  results:boolean = false;

  constructor(private _movieService: ServiceService) { }
  ngOnInit(): void {
  }
  submit() {
    this._movieService.getMovieService(this.movieName).subscribe(res => {
      if (res.totalResults > 0) {
      
      console.log("Movie Data", res);
      
      let count = 0;
      if (res.totalResults < 3)
        count = res.totalResults;
      else
        count = 3;
      
        for (let i = 0; i < count; i++) {
          this.movies[i] = res.Search[i];
          console.log(res.Search[i]);
        }
        this.results = true;
      this.noResults = false;
      }
      else
      {
        this.results = false;

        this.noResults = true;
      }
    });
  }

}

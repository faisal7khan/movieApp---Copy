import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _service:ServiceService, private _router:ActivatedRoute) { }
  id:string;
  movie:any;
  ngOnInit() {
    let link = this._router.params.subscribe(params =>{
      this.id = params['imdbID'],
      console.log("imdbID = " , this.id)
    });
    this._service.getMovieByID(this.id).subscribe(res => {
      console.log("Movie = " , res);
      this.movie = res;
    });
  }


}

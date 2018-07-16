import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServiceService {

  constructor(private _http:Http , private _http2:HttpClient) { }
  url:string = "http://www.omdbapi.com/?i=tt3896198&apikey=cbf0dd63&s=" ;
  url2:string = "http://www.omdbapi.com/?apikey=cbf0dd63&i="
  finalUrl:string;
  finalUrl2:string;
  getMovieService(movieName: string) : Observable<any>{
    this.finalUrl = this.url + movieName;
    //console.log("Url = " , this.finalUrl );
    //console.log(this._http2.get(this.finalUrl));
    return this._http2.get(this.finalUrl);
  }
  getMovieByID(id:string) : Observable<any>{
    this.finalUrl2 = this.url2 + id;
    console.log("Url = " , this.finalUrl2 );
    //console.log(this._http2.get(this.finalUrl));
    return this._http2.get(this.finalUrl2);
  }
  

}

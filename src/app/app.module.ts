import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:MovieSearchComponent },
  { path: 'movieSearch', component: MovieSearchComponent },
  { path: 'movieDetails/:imdbID' , component:MovieDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL: string = 'https://my-json-server.typicode.com/ylytvyn/starwars';

  constructor(private http: HttpClient) { }

  public getMoviesList() {
    return this.http.get(`${this.SERVER_URL}/movies`);
  }

  public callMoviesStorage(item: IMovie) {
    let storedMovies: IMovie[] = JSON.parse(localStorage.getItem('newMovies')) || [];

    storedMovies.push(item);
    
    localStorage.setItem('newMovies', JSON.stringify(storedMovies));
  }
  
  public getMoviesFromStorage(): IMovie[] {
    return JSON.parse(localStorage.getItem('newMovies')) || [];
  }
}
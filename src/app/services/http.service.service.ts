import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Movie } from '../models';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<APIResponse<Movie>> {
    return this.http.get<APIResponse<Movie>>(`${env.BASE_URL}`);
  }

  getOne(id:string){
    return this.http.get(`https://movies-app1.p.rapidapi.com/api/movie/${id}`);
   }
}

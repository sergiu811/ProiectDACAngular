import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';
import { APIResponse, Movie } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Array<Movie> = [];
  private movieSub: Subscription = new Subscription;
  user$ = this.authService.currentUser$;
  constructor(private authService:AuthenticationService, private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

 

  ngOnInit(): void {
    this.movieSub = this.httpService
      .getMovieList()
      .subscribe((movieList: APIResponse<Movie>) => {
        this.movies = movieList.results;
        console.log(movieList);
      });
  }
  openMovieDetails(id: string): void {
    this.router.navigate(['details', id]);
  }
  ngOnDestroy(): void {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }
  }
}

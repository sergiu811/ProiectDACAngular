import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movieRating = 0;
  movieID!: string;
  movie: Movie | undefined;
  routeSub: Subscription = new Subscription;
  movieSub: Subscription = new Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.movieID = params['id'];
      this.getMovieDetails(this.movieID);
    });
  }

  getMovieDetails(id: string): void {
   this.httpService.getOne(id).subscribe((res:any) =>{
    this.movie=res.result;
   } )

  }

}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': 'f4ddcbce21msh2b608cb3923ac9ep125378jsn7e5b03d430a6',
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      },
      
    });
    return next.handle(req);
  }
}
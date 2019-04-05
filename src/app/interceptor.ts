import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpResponse,HttpHandler,HttpEvent,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');  
    console.log("got request-",request)
    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });

    if (!request.headers.has('Content-Type')) {
      console.log("content type")
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    console.log("new request-",request)
    return next.handle(request).pipe(
      //for handel on responses
      map(
        (event) => {
          console.log("event")
          console.log(event)
          return event;
        }),
      catchError((error: HttpErrorResponse) => {
        console.log("error")
        console.log(error, "error")
        //handel your error request here
        return throwError(error);
      })
    );
  }
}

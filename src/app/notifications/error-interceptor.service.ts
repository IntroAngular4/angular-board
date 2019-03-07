import { HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor() {}
  public intercept(req, next) {
    return next.handle(req).pipe(catchError(this.handleError));
  }
  private handleError(err) {
    const unauthorized_code = 401;
    let userMessage = 'Fatal error';
    if (err instanceof HttpErrorResponse) {
      if (err.status === unauthorized_code) {
        userMessage = 'Authorization needed';
      } else {
        userMessage = 'Comunications error';
      }
    }
    console.log(userMessage);
    return throwError(err);
  }
}

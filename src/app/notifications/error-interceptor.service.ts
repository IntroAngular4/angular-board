import { HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  // dependencia en el constructor
  constructor(private notificationsStore: NotificationsStoreService) {}

  public intercept(req, next) {
    return next.handle(req).pipe(catchError(this.handleError.bind(this)));
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
    // emisión de la notificación
    this.notificationsStore.dispatchNotification(userMessage);
    return throwError(err);
  }
}

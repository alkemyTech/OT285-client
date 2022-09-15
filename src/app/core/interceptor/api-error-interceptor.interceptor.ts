import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ApiErrorInterceptorInterceptor implements HttpInterceptor {

  private error = {
    "error": "No token"
  }

  constructor(private snackBarService: SnackBarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `CLIENT ERROR: ${error.error.message}`;
          errorMessage = `CLIENT ERROR: ${error}`;
          console.log(errorMessage)
        } else {
          // backend error
          errorMessage = `SERVER ERROR: ${error.message}`;
          let errorMessage2 = `Server-side error: ${error.status} ${error.message}`;
          let errorMessage3 = `Server-side error: ${error.status}`;
        }
        
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        this.snackBarService.error(errorMessage)
        return throwError(errorMessage);
      })
    );
  }
}

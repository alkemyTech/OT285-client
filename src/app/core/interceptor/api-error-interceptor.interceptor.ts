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

  constructor(private snackBarService: SnackBarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event: any) => {
        if(event instanceof HttpResponse){
          if (event.body.error){
            this.snackBarService.error(event.body.error)
          } 
        }      
      }),
      catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `CLIENT ERROR: ${error.error.message}`;
        } else {
          // backend error
          errorMessage = `SERVER ERROR: ${error.message}`;
        }
        this.snackBarService.error(errorMessage)
        return throwError(errorMessage);
      })
    )}
}
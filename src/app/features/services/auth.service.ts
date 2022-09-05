import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/core/models/auth';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';
import { PublicApiServiceService } from 'src/app/core/services/publicApiService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private privateApiService: PrivateApiServiceService, private publicApiService:PublicApiServiceService) { }

  signIn<T>(registerForm: Auth): Observable<T>{
    return this.publicApiService.post('register', registerForm)
  }

  logIn<T>(loginForm: Auth): Observable<T>{    
    return this.publicApiService.post('login', loginForm)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getData<T>(): Observable<T>{
    return this.privateApiService.get('auth/me')
  }
}

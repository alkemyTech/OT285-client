import { Injectable } from '@angular/core';
import { Auth } from 'src/app/core/models/auth';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';
import { PublicApiServiceService } from 'src/app/core/services/publicApiService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private privateApiService: PrivateApiServiceService, private publicApiService:PublicApiServiceService) { }

  signIn(registerForm: Auth){
    return this.publicApiService.post('register', registerForm)
  }

  logIn(loginForm: Auth){    
    return this.publicApiService.post('login', loginForm)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getData(){
    return this.privateApiService.get('auth/me')
  }
}

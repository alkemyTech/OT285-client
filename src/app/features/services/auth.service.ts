import { Injectable } from '@angular/core';
import { LoginForm } from 'src/app/core/models/login-form';
import { RegisterForm } from 'src/app/core/models/register-form';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';
import { PublicApiServiceService } from 'src/app/core/services/publicApiService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private privateApiService: PrivateApiServiceService, private publicApiService:PublicApiServiceService) { }

  signIn(registerForm:RegisterForm){
    return this.publicApiService.post('register', registerForm)
  }

  logIn(loginForm:LoginForm){    
    return this.publicApiService.post('login', loginForm)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getData(){
    return this.privateApiService.get('auth/me')
  }
}

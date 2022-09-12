import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';
import { PublicApiServiceService } from 'src/app/core/services/publicApiService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private privateApiService: PrivateApiServiceService, 
    private publicApiService:PublicApiServiceService,
    private auth: Auth
    ) { }

  signIn<AuthResponse>(registerForm: User): Observable<AuthResponse>{
    return this.publicApiService.post('register', registerForm)
  }

  logIn<AuthResponse>(loginForm: User): Observable<AuthResponse>{    
    return this.publicApiService.post('login', loginForm)
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    return localStorage.setItem('token', token)
  }

  getData<AuthResponse>(): Observable<AuthResponse>{
    return this.privateApiService.get('auth/me')
  }

  loginWithGoogle(): Promise<UserCredential> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}

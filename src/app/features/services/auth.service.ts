import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential, authState, User as userData, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { collection, CollectionReference, doc, docData, DocumentData, Firestore, setDoc } from '@angular/fire/firestore';
import { from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { PrivateApiServiceService } from 'src/app/core/services/privateApiService.service';
import { PublicApiServiceService } from 'src/app/core/services/publicApiService.service';


export interface UserInfo extends userData{
  admin?:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersCollection: CollectionReference<DocumentData>;

  constructor(
    private privateApiService: PrivateApiServiceService, 
    private publicApiService:PublicApiServiceService,
    private auth: Auth,
    private readonly firestore: Firestore,
    ) { 
      this.usersCollection = collection(this.firestore, 'users');
    }

  // signIn<AuthResponse>(registerForm: User): Observable<AuthResponse>{
  //   return this.publicApiService.post('register', registerForm)
  // }

  // logIn<AuthResponse>(loginForm: User): Observable<AuthResponse>{    
  //   return this.publicApiService.post('login', loginForm)
  // }

  logIn(user:User): Observable<UserCredential>{   
    return from(signInWithEmailAndPassword(this.auth, user.email, user.password));
  }

  logOut(): Observable<void> {
    return from(signOut(this.auth))
    };
  

  // getToken(): string | null {
  //   return localStorage.getItem('token');
  // }

  // setToken(token: string): void {
  //   return localStorage.setItem('token', token)
  // }

  // getData<AuthResponse>(): Observable<AuthResponse>{
  //   return this.privateApiService.get('auth/me')
  // }

  loginWithGoogle(): Observable<UserCredential> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  getUserData(): Observable<UserInfo | null>{

    return authState(this.auth).pipe(
      switchMap((user) => {
        //Si no hay user logueado devolver null
        if(!user){
          return of(null);
        }

        // Traer de firestore info del usuario logueado (rol)
        return docData(doc(this.firestore ,`users/${user.uid}`))
        .pipe(
          map((userData) => {
            if(userData){
              return {...user , ...userData} //Si existe el user en firestore agregar rol al object user y devolver
            }else{
              //Caso contrario crear documento en firestore con el rol (admin false por default)
              setDoc(doc(this.firestore, 'users', user.uid), {admin:false});
              return {...user, ...{admin:false}}
            }
          })
        )
      })
    )
  }
}

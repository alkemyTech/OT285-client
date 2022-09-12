import { Component, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/features/services/auth.service';
import { AuthPageActions } from '../state/actions';
import { logInWithGoogle } from '../state/actions/auth-page.actions';
import { AuthState } from '../state/auth.reducers';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  logingForm: FormGroup = new FormGroup({
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  constructor(
    private AuthService:AuthService,
    private router:Router,
    private Store:Store<AuthState>
  ) { }

  ngOnInit(): void {
  }

  login(): void{
    console.log(this.logingForm);
  }


  loginWithGoogle(): void{
    // this.AuthService.loginWithGoogle()
    // .then((UserData:UserCredential) => {
    //   console.log(UserData) //Data del usuario
    //   this.router.navigate(['/home']) //redirigir a la pagina correspondiente
    // })
    // .catch((e) => console.log(e.message)); //falta implementar alerta en caso de error

    this.Store.dispatch(AuthPageActions.logInWithGoogle())
    // this.Store.dispatch(AuthPageActions.getAuthenticationData())

  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/features/services/auth.service';
import { AuthPageActions } from '../state/actions';
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
    private Store:Store<AuthState>,
    private AuthService:AuthService
  ) { }

  ngOnInit(): void {}

  login(): void{
    if(this.logingForm.valid){
      this.Store.dispatch(
        AuthPageActions.logIn(
          {user:this.logingForm.value}
        )
      )
    }
  }

  loginWithGoogle(): void{
    this.Store.dispatch(AuthPageActions.logInWithGoogle())
  }
}

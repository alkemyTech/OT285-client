import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './state/auth.reducers';
import { AuthEffects } from './state/auth.effects';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth',authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }

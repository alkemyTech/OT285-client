import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent } from "./login-form/login-form.component";
import {
  RegisterFormComponent,
  TermsOfServiceComponent,
} from "./register-form/register-form.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    TermsOfServiceComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}

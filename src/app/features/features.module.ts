import { RouterModule } from "@angular/router";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { authReducer } from "./pages/auth/state/auth.reducers";
import { AuthEffects } from "./pages/auth/state/auth.effects";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule, 
    AppRoutingModule,
    RouterModule, 
    SharedModule,
    StoreModule.forFeature('auth',authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [CurrencyPipe],
})
export class FeaturesModule {}

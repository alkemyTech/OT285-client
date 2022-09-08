import { RouterModule } from "@angular/router";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { SharedModule } from "../shared/shared.module";
import { HomepageComponent } from "./pages/homepage/homepage.component";

@NgModule({
  declarations: [
    HomepageComponent
  ],
  exports: [RouterModule],
  imports: [CommonModule, AppRoutingModule, RouterModule, SharedModule],
  providers: [CurrencyPipe],
})
export class FeaturesModule {}

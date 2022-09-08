import { RouterModule } from "@angular/router";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { SharedModule } from "../shared/shared.module";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { CoreModule } from "../core/core.module";

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
    CoreModule
  ],
  providers: [CurrencyPipe],
})
export class FeaturesModule {}

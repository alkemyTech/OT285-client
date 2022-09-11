import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HttpService } from "./services/http.service";
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { MaterialModule } from "../shared/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PublicHeaderComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    MaterialModule,
    RouterModule
  ],
  providers: [HttpService],
  exports:[
    PublicHeaderComponent
  ]
})
export class CoreModule {}

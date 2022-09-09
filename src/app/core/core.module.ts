import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../shared/material.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [HttpService],
})
export class CoreModule {}

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpService } from "./services/http.service";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [HttpService],
})
export class CoreModule {}

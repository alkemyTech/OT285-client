import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpService } from "./services/http.service";
import { PublicHeaderComponent } from "./components/public-header/public-header.component";
import { MaterialModule } from "../shared/material.module";

@NgModule({
  declarations: [
    PublicHeaderComponent, 
    SidebarComponent,
    FooterComponent
  ],
  imports: [    
    CommonModule,   
    HttpClientModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ,
    SharedModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [HttpService],
  exports: [PublicHeaderComponent],
})
export class CoreModule {}

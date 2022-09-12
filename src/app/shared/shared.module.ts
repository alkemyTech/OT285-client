import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeadingComponent } from "./components/heading/heading.component";
import { CardComponent } from "./components/card/card.component";
import { SliderComponent } from "./components/slider/slider.component";
import { SkeletonComponent } from "./components/skeleton/skeleton.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { GoogleMapsComponent } from "./components/google-maps/google-maps.component";

@NgModule({
  declarations: [
    HeadingComponent,
    CardComponent,
    SliderComponent,
    SkeletonComponent,
    SpinnerComponent,
    ProgressComponent,
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    MaterialModule,
    CKEditorModule,
    ReactiveFormsModule,
    SliderComponent,
    FormsModule,
    HeadingComponent,
    CardComponent,
    SkeletonComponent,
    SpinnerComponent,
    ProgressComponent,
    GoogleMapsComponent
  ],
})
export class SharedModule {}

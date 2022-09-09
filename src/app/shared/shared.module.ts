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
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    HeadingComponent,
    CardComponent,
    SliderComponent,
    SkeletonComponent,
    SpinnerComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CoreModule
  ],
  exports: [
    MaterialModule,
    CKEditorModule,
    ReactiveFormsModule,
    CoreModule,
    SliderComponent,
    FormsModule,
    HeadingComponent,
    CardComponent,
    SkeletonComponent,
    SpinnerComponent,
    ProgressComponent
  ],
})
export class SharedModule {}

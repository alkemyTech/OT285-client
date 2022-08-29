import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SliderComponent } from "./components/slider/slider.component";
import { HeadingComponent } from "./components/heading/heading.component";
import { CardComponent } from './components/card/card.component';
import { ListComponent } from "./components/list/list.component";


@NgModule({
  declarations: [
    HeadingComponent,
    CardComponent,
    SliderComponent,
    ListComponent
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
    ListComponent
  ]
})
export class SharedModule {}

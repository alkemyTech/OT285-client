import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadingComponent } from './components/heading/heading.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HeadingComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    HeadingComponent,
    CardComponent
  ]
})
export class SharedModule { }

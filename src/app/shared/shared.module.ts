import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowTitleNewsComponent } from './components/show-title-news/show-title-news.component';



@NgModule({
  declarations: [
    ShowTitleNewsComponent
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
    ShowTitleNewsComponent
  ]
})
export class SharedModule { }

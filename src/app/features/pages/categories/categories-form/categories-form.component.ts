import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ImageValidator } from './image.validator';



@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  public Editor = ClassicEditor;

  editorConfig = { 
    placeholder:'Ingrese una descripción...'
  }

  categoriesForm = this.fb.group({
    name:['', [Validators.required, Validators.minLength(4), Validators.maxLength(256)]],
    image:['',[ Validators.required, ImageValidator]],
    description:['', Validators.required],
  })

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    let file = event.target.files[0];
    this.categoriesForm.controls['image'].setValue(file ? file : '');
  }

  sendForm(){
    if(this.categoriesForm.valid){
      console.log(this.categoriesForm.value)
    }
  }


}

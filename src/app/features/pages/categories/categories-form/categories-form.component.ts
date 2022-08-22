import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ImageValidator } from './image.validator';

interface category {
  name:string,
  image:File,
  description:string
}

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  @Input() category:category | undefined

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
    if(this.category){
      this.categoriesForm.patchValue(this.category)
    }
  }

  onFileSelected(event: any): void {
    let file = event.target.files[0];
    this.categoriesForm.controls['image'].setValue(file ? file : '');
  }

  sendForm(): void {
    if(this.categoriesForm.valid){
      if(this.category){
        //Petición PATCH al endpoint de actualización del server (/categories/:id)
        console.log('PATCH:', this.categoriesForm.value)
      }else{
        //Petición POST al endpoint de creación de Categorías (/categories)
        console.log('POST:', this.categoriesForm.value)
      }
    }else{
      this.categoriesForm.markAllAsTouched();
    }
  }


}

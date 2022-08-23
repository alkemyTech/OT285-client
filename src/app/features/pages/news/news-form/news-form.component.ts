import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  public Editor = ClassicEditor;
  public selectedCategory!:string;
  public fileName = '';
  public infoRequired = false;
  
  newsForm!: FormGroup;

  get titleControl(): FormControl{
    return this.newsForm.get('title') as FormControl
  }

  get categoryControl(): FormControl{
    return this.newsForm.get('category') as FormControl
  }

  get imageControl(): FormControl{
    return this.newsForm.get('image') as FormControl
  }

  get textControl(): FormControl{
    return this.newsForm.get('text') as FormControl
  }


  constructor() { }

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      title: new FormControl('',[Validators.required,Validators.minLength(4)]),
      category: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      text: new FormControl('',[Validators.required]),
    })
  }

  //Sección de categorias temporales - Será sustituida por solicitud GET-API
  categories = [
    {id: 'health' , name: 'Salud'},
    {id: 'help' , name: 'Ayuda'},
  ]

  fileChangeEvent(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
    }
  }

  saveOrEdit(){
    this.infoRequired = true;
    //Solicitud POST o PATCH
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit {

  public Editor = ClassicEditor;
  public selectedCategory!:string;
  public fileName = '';
  public infoRequired = false;
  public urlArray :any = [];
  
  @ViewChild('url') inputName: any;
  
  organizationForm!: FormGroup;

  get nameControl(): FormControl{
    return this.organizationForm.get('name') as FormControl
  }

  get imageControl(): FormControl{
    return this.organizationForm.get('image') as FormControl
  }

  get shortTextControl(): FormControl{
    return this.organizationForm.get('shortText') as FormControl
  }

  get longTextControl(): FormControl{
    return this.organizationForm.get('longText') as FormControl
  }


  constructor() { }

  ngOnInit(): void {
    this.organizationForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(4)]),
      image: new FormControl('',[Validators.required]),
      shortText: new FormControl('',[Validators.required]),
      longText: new FormControl('',[Validators.required]),
      socialNetworks: new FormControl('',[Validators.required]),
    })
  }

  fileChangeEvent(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
    }
  }

  addUrl(url:string){
    this.urlArray.push(url)
    this.inputName.nativeElement.value = ' ';
  }

  saveOrEdit(){
    this.infoRequired = true;
    //Solicitud POST o PATCH
  }
}

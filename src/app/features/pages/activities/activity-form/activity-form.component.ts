import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  title = 'base-ong-angular-client';

  public creationActivity = ClassicEditor;
  
  errorImageActivity="Unicamente archivos jpg o png";
  errorNameActivity="Ingresa un nombre valido";

  constructor() { }

  ngOnInit(): void {
  }

formActivity = new FormGroup({
    nameActivity : new FormControl
     ('',[Validators.required,
       Validators.min(3)]),
    imageActivity: new FormControl
     ('', [Validators.required,
       Validators.pattern(/.(?:jpg|png)/)]),
    descriptionActivity: new FormControl
    ('Ingesa una descripcion')

  });

  errorImage(): void{
    if(this.formActivity.get('imageActivity')?.invalid && this.formActivity.get('imageActivity')?.touched){
      this.errorImageActivity="Unicamente archivos jpg o png";
    }
    else{
      this.errorImageActivity="";
    }
  }



  addActivity(formActivity:FormGroup):void{
    
    /* crear actividad  (/activities/create) */

  }

  modifyActivity(formActivity:FormGroup):void{
    /* modificar actividad (/activities/:id) */

  }

  loadImageActivity(event:any):void{
    const file = event.target.files[0];
  }

}

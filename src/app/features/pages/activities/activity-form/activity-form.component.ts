import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Store } from '@ngrx/store';
import { State } from '../state/activities.reducer';
import * as activitiesPageActions from "../state/actions/activities-page.actions";
import { Activity } from 'src/app/core/models/activity';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  title = 'base-ong-angular-client';
  editing = false;
  
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.formActivity.value.name == "" ? (this.editing = false) : (this.editing = true);
  }

  public creationActivity = ClassicEditor;
  errorImageActivity="Unicamente archivos jpg o png";
  errorNameActivity="Ingresa un nombre valido";


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

  addActivity():void{
    let body: Activity = {
      name: this.formActivity.controls["nameActivity"].value,
      description: this.formActivity.controls["descriptionActivity"].value,
      // image: ''
    }
    this.store.dispatch(activitiesPageActions.createActivity({activity:body}))
    /* crear actividad  (/activities/create) */

  }

  modifyActivity(formActivity:FormGroup):void{
    /* modificar actividad (/activities/:id) */

  }

  loadImageActivity(event:any):void{
    const file = event.target.files[0];
  }
}

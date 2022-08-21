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

  public Editor = ClassicEditor;

  public creationActivicty =  ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }



  formActivicty = new FormGroup({
    name : new FormControl ('',[Validators.required, Validators.min(3)])

  })

  addActivity(){

    
  }






}

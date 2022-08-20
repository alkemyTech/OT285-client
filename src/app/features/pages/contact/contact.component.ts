import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  messageError:string="";
  errorEmail:string="";
  errorPassword:string="";



  /*end variables*/


  formLogin = new FormGroup({
    name:   new FormControl('',[Validators.required, Validators.min(2)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required,
      Validators.min(8),
      Validators.pattern(/^[0-9]{8,}$/)]),
    message : new FormControl('', [Validators.required])


   
  });


  /**functions*/


    addLogin(form:any){

      console.log(this.formLogin.get('name')?.value);
      console.log(this.formLogin.get('email')?.value);
      console.log(this.formLogin.get('phone')?.value);
      console.log(this.formLogin.get('message')?.value);


    }

}

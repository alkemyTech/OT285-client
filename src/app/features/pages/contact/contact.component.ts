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
  nameError:string="Ingresa un nombre valido";
  emailError:string="Correo no valido";
  phoneError:string="Ingresa valores numericos";
  messageError:string="Tienes que dejar un mensaje";



  /*end variables*/


  formContact = new FormGroup({
    name:   new FormControl('',[Validators.required, Validators.min(3), Validators.maxLength(256)] ),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl('', [Validators.required,
      Validators.min(8),
      Validators.pattern(/^[0-9]{8,}$/)]),
    message : new FormControl('', [Validators.required])


   
  });


  /**functions*/


    addLogin(form:any){

      console.log(this.formContact.get('name')?.value);
      console.log(this.formContact.get('email')?.value);
      console.log(this.formContact.get('phone')?.value);
      console.log(this.formContact.get('message')?.value);
    }

}

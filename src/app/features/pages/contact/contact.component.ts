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
    nameContact:   new FormControl('',[Validators.required, Validators.min(3), Validators.maxLength(256)] ),
    emailContact : new FormControl('', [Validators.required, Validators.email]),
    phoneContact : new FormControl('', [Validators.required,
      Validators.min(8),
      Validators.pattern(/^[0-9]{8,}$/)]),
    messageContact : new FormControl('', [Validators.required])


   
  });


  /**functions*/


    addLogin(form:any):void{

      /** enviar email*/
    
    }

}

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


    /* password : new FormControl('', [Validators.required,
      Validators.min(6),
      Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)]),
                        
    
    passwordConfirm: new FormControl('',[Validators.required,
    Validators.min(6),
    Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)]) */
  });


  /**functions*/


    addLogin(form:any){

      console.log(this.formLogin.get('name')?.value);
      console.log(this.formLogin.get('email')?.value);
      console.log(this.formLogin.get('phone')?.value);
      console.log(this.formLogin.get('message')?.value);

      /* this.messageError=""
      let validationPassword:boolean = this.formLogin.get('password')?.value === this.formLogin.get('passwordConfirm')?.value;
     
      
      if(validationPassword){
        this.myObject[0]=this.formLogin.get('email')?.value;
      this.myObject[1]=this.formLogin.get('password')?.value;
      console.log(this.myObject);
      }
      else{
        this.messageError="Passwords do not match";
      } */



    }


    /* validationEmail(): string{
      if((this.formLogin.get('email')?.touched) && this.formLogin.get('email')?.invalid){
          this.errorEmail="Wrong Email"; 
      }else{
        this.errorEmail="";
      }
      return this.errorEmail;
    }

    validationPassword():string{
      if((this.formLogin.get('password')?.touched) && this.formLogin.get('password')?.invalid){
        this.errorPassword="password must have at least 1 lowercase character, 1 uppercase character and a special character #$%&"; 
    }else{
      this.errorPassword="";
    }
    return this.errorPassword;
      

    } */













}

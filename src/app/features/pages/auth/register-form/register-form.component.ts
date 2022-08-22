import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

//Fx valida contraseñas iguales
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return si otra validacion ya dio error
          return;
      }

      // setea error en matchingControl si falla la validacion
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {
  
  registerForm!: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm = this.formBuilder.group({      
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])(?=.*[@$!%*#?&]).{6,}') ]],
      confirmPassword: ['', Validators.required],
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  // getter para rapido acceso a form fields
  get f() { return this.registerForm.controls; }

  register(){
    console.log(this.registerForm);
    this.submitted = true;

    // return si formulario es invalido
    if (this.registerForm.invalid) {
        return;
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

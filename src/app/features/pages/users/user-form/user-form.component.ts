// COMO: Usuario administrador
// QUIERO: Crear o editar un usuario existente
// PARA: Mantener el contenido actualizado

// Criterios de aceptacion: En base del formulario de creación existente que contiene los campos Name, Email y Role, agregar campo profilePhoto. Para el campo Role, debe ser un select con 2 opciones: administrador y regular. 
// Objetivos:
// El objetivo es crear un formulario reutilizable para las acciones de edición como de creación. Para esto, deberá poder comportarse de forma diferente según recibe un usuario o no. En el caso de no recibir un objeto de usuario existente, mostrar los campos vacíos y realizar una petición POST al endpoint de creación de Usuarios (/users/create). En el caso de recibir un objeto de usuario, completar el formulario con los campos del mismo y realizar una petición PATCH al endpoint de actualización del server (/users/:id). Este formulario se mostrará en el backoffice tanto en las rutas de creación y edición.
// El objetivo es utilizar Angular Forms para la validación de los campos del formulario, tanto su formato como validar su condición de obligatoriedad. 
// Name: debe tener cantidad minima de 4 caracteres.
// Email. debe tener @ y extensión .com u otra.
// Image: debe tener un formato .jpg o .png.
// Role: debe ser usuario o administrador
// Description: debe tener cantidad minima de 10 caracteres.


import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user!: User;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    image: ['', [Validators.required, Validators.pattern(/^.*\.(png|jpg)$/)]],
    rol: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]]
  })

  editing = false;
  userToSend!: User;
  fileName = '';
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.patchValue(this.user)
    this.form.value.name == '' ? this.editing = false : this.editing = true;
    console.log(this.form.invalid);
    
    
  }

  send(){
    this.userToSend = this.form.value;
    if(this.editing){
      this.edit(this.userToSend);
    }
    else{
      this.create(this.userToSend);
    }
    console.log(this.userToSend);
    
  }
  cancel(){

  }

  fileChangeEvent(event: any) {

    const file: File = event.target.files[0];
    
    if (file) {
      this.fileName = file.name;
    }
  }

  edit(userInfo: User):void{
    //Petición PATCH al endpoint de actualización del server (/users/:id).
  }
  create(userInfo: User):void{
    //petición POST al endpoint de creación de Usuarios (/users/create).
  }
}

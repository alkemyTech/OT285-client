
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

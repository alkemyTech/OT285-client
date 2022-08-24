
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { ImageValidator } from 'src/app/shared/validators/image.validator';

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
    image: ['', [Validators.required, ImageValidator]],
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
    
    if(this.user){
      this.form.patchValue(this.user)

    }
    this.form.value.name == '' ? this.editing = false : this.editing = true;
    
    
  }

  send(): void{
    this.userToSend = this.form.value;
    if(this.editing){
      this.edit(this.userToSend);
    }
    else{
      this.create(this.userToSend);
    }
    console.log(this.userToSend);
    
  }
  cancel(): void{

  }

  fileChangeEvent(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.form.controls['image'].setValue(file ? file : '');
      
    }
  }

  edit(userInfo: User): void{
    //Petición PATCH al endpoint de actualización del server (/users/:id).
  }
  create(userInfo: User): void{
    //petición POST al endpoint de creación de Usuarios (/users/create).
  }
}

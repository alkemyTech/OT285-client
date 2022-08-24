import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Member } from 'src/app/core/models/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  @Input() member!: Member;
  editor = ClassicEditor;
  reg = new RegExp('^(https?:\\/\\/)?'+'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i');

  urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator

  public form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    image: ['', [Validators.required, Validators.pattern(/^.*\.(png|jpg)$/)]],
    description: ['', Validators.required],
    links: [[], Validators.required]
  })

  editing = false;
  fileName = '';
  linksInputError = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form.patchValue(this.member)
    this.form.value.name == '' ? this.editing = false : this.editing = true;
    if(this.form.value.description == ''){
      this.form.patchValue({
        description: 'Escriba aqui una descripcion'
      })      
    }
  }
  addLink(event: any): void{
    const links: string[] = this.form.get('links')?.value;
    const link = event.value;
    if(this.reg.test(link)){
      links.push(link);
      this.form.patchValue({
        links: links
      });
      this.linksInputError = false;
    }
    else{
      this.linksInputError = true;
    }
      
    
  }
  removeLink(link: string): void{
    const links = this.form.get('links')?.value;
    const index = links.indexOf(link);
    if (index >= 0) {
      links.splice(index, 1);
      this.form.patchValue({
        links: links
      });
    }
  }
  fileChangeEvent(event: any): void{
    const file: File = event.target.files[0];
    
    if (file) {
      this.fileName = file.name;
    }
  }
  send(): void{
    console.log(this.form.value);
    
  }
  cancel(): void{

  }
}

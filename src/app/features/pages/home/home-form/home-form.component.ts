import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ImageValidator } from 'src/app/shared/validators/image.validator';
import { UrlValidator } from 'src/app/shared/validators/url.validator';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {
  slide = {
    text: 'aaaaaa',
    image: 'assets/images/LOGO-SOMOS MAS.png'
  };
  @Input() home = {
    welcomeText: '',
    slides: [
      this.slide,
      this.slide,
      this.slide
    ]
  };
  form = this.fb.group({
    welcomeText: ["", [Validators.required, Validators.minLength(20)]],
    slides: [
      [],
      {
        validators: [Validators.required],
        updateOn: "submit",
      },
    ],
  });
  fileName = "";
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }
  addSlide(event: any): void{
    const slide = event.value;
    if (slide != "") {
      this.uploadSlides(slide);
    }
  }
  uploadSlides(slide: any): void{
    const slides: [any] = this.form.get("slides")?.value;
    if(slide){
      slides.push(slide);
      this.form.controls["links"].setValue(slides);
    }
  }
  fileChangeEvent(event: any){
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.form.controls["image"].setValue(file);
    }
  }
  send(): void{

  }
  cancel(): void{

  }
  
}

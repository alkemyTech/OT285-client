import { Component, Input, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ImageValidator } from "src/app/shared/validators/image.validator";

@Component({
  selector: "app-home-form",
  templateUrl: "./home-form.component.html",
  styleUrls: ["./home-form.component.scss"],
})
export class HomeFormComponent implements OnInit {
  @Input() home = {
    welcomeText: "This is a welcome text",
    slides: [
      {
        text: "a1",
        image: "",
      },
      {
        text: "a2",
        image: "",
      },
      {
        text: "a3",
        image: "",
      },
    ],
  };

  form = this.fb.group({
    welcomeText: ["", [Validators.required, Validators.minLength(20)]],
    slides: this.fb.array([]),
  });

  get slides() {
    return this.form.controls["slides"] as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.home) {
      this.form.controls.welcomeText.setValue(this.home.welcomeText);
      for (let i = 0; i < this.home.slides.length; i++) {
        const slide = this.home.slides[i];
        const slideModel = this.fb.group({
          text: [slide.text, Validators.required],
          image: [slide.image, [Validators.required, ImageValidator]],
        });
        this.slides.push(slideModel);
      }
    }
  }

  fileChangeEvent(event: any, slide: FormGroup): void {
    const file: File = event.target.files[0];

    if (file) {
      slide.controls.image.setValue(file);
    }
  }
  send(): void {
    console.log("actualizar");
    console.log(this.form.value);
  }
  cancel(): void {
    console.log("cancelar");
  }
  toGroup(abs: AbstractControl): FormGroup {
    return abs as FormGroup;
  }
}

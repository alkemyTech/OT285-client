import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  form: FormGroup;
  public Editor = ClassicEditor;

  constructor(
    private formBuilder: FormBuilder // Se inyecta => private http: HttpService
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      image: ["", [Validators.required]],
      order: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  sendSlide(event: Event) {}

  //Form Getters
  get name() {
    return this.form.get("name");
  }
  get description() {
    return this.form.get("description");
  }
  get image() {
    return this.form.get("image");
  }
  get order() {
    return this.form.get("order");
  }
}

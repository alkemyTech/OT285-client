import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ImageValidator } from "src/app/shared/validators/image.validator";

@Component({
  selector: "app-slides-form",
  templateUrl: "./slides-form.component.html",
  styleUrls: ["./slides-form.component.scss"],
})
export class SlidesFormComponent implements OnInit {
  form: FormGroup;
  public Editor = ClassicEditor;
  slideEmpty!: boolean;
  slideData!: any;
  imageFile!: File | null;

  constructor(
    private formBuilder: FormBuilder // Se inyecta => private http: HttpService
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      image: ["", [Validators.required, ImageValidator]],
      order: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    /* Obtengo el objeto slide y lo inserto en el formulario,
     si el objeto viene vacio, slideEmpty sera true.
    */
    /* 
    this.http.get(PARAMETROS).subscribe((data)=> {
    this.slideData = data;
    this.name?.setValue(data.name);
    this.description?.setValue(data.description);
    this.image?.setValue(data.image);
    this.order?.setValue(data.order);

    if(this.name == "" && this.description == "" && this.image == "" && this.order == ""){
      this.slideEmpty = true
    } else { this.slideEmpty = false }
    })
    
    */
  }

  sendSlide(event: Event): void {
    event.preventDefault;
    let url = "";
    let newForm: any = {
      name: this.name?.value,
      description: this.description?.value,
      image: this.imageFile,
      order: this.order?.value,
    };
    if (this.slideEmpty) {
      url = "/Slides/create";
      /*
      this.http.post(url, newForm).subscribe() 
      */
    } else if (!this.slideEmpty) {
      url = "/Slides/" + "this.slideData.id";
      /*
      this.http.patch(url, newForm).subscribe() 
      */
    }
    //To Delete
    console.log(url);
    console.log(newForm);
  }

  loadImg(event: any): void {
    const file: File | null = event.target.files[0];
    this.imageFile = file;
  }

  //Form Getters
  get name(): AbstractControl | null {
    return this.form.get("name");
  }
  get description(): AbstractControl | null {
    return this.form.get("description");
  }
  get image(): AbstractControl | null {
    return this.form.get("image");
  }
  get order(): AbstractControl | null {
    return this.form.get("order");
  }
}

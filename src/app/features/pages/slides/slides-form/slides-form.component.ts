import { Component, OnInit } from "@angular/core";

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ImageValidator } from "src/app/shared/validators/image.validator";
import { listSlides } from "./array.slide";

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
    private formBuilder: FormBuilder, // Se inyecta => private http: HttpService
    private routeCreate: Router //variable para redirigir /backoffice/Slides/create//OT285-66
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
      //url = "/Slides/create";
      /*
      this.http.post(url, newForm).subscribe() 
      */
    } else if (!this.slideEmpty) {
      //url = "/Slides/" + "this.slideData.id";
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




   /* ************************************************************************* */
  /**OT285-66 beginning */

  mySlides:listSlides[]=[
    new listSlides("title1", "./assets/images/LOGO-SOMOS MAS.png", "order1"),
    new listSlides("title2", "./assets/images/LOGO-SOMOS MAS.png", "order2"),
    new listSlides("title3", "./assets/images/LOGO-SOMOS MAS.png", "order3")
  ];

  deleteSlide(indice:number):void{

    /**Este solo esta como modo de prueba
     * para borrar los items del array
     * borrar esta instruccion para borrar los slides 
     * desde el servicio
     */
    this.mySlides.splice(indice, 1);

  }


  /** */
  navigateCreate(): void{
    /**En la sección superior, mostrará un boton que redirigirá a la ruta /backoffice/Slides/create */
    this.routeCreate.navigate(['/backoffice/Slides']);

  }
/**OT285-66 end */
}












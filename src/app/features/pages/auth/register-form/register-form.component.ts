import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { LatLng } from "@tomtom-international/web-sdk-services";
import { MustMatch } from "src/app/shared/validators/pass-match.validator";
import { TermsOfServiceComponent } from "./terms-of-service/terms-of-service.component";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent implements OnInit {
  
  locationData!: LatLng;
  registerForm!: FormGroup;
  termsOfServiceResult!: boolean;
  termsOfServiceTouched: boolean = false;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: [
          "",
          [
            Validators.required,
          ]
        ],
        email: [
          "",
          [
            Validators.required,
            Validators.email,
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}"),
          ],
        ],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(
              "(?=[^a-zA-Z]*[a-zA-Z])(?=[^0-9]*[0-9])(?=.*[@$!%*#?&]).{3,}"
            ),
          ],
        ],
        confirmPassword: ["", Validators.required],
        latitude: ["", Validators.required],
        longitude: ["", Validators.required]
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );    
  }

  addItem(newItem: LatLng){
    this.locationData = newItem
    this.registerForm.patchValue({
      latitude: this.locationData.lat,
      longitude: this.locationData.lng
    });
  }

  // getter para rapido acceso a form fields
  get f() {
    return this.registerForm.controls;
  }

  register(): void {
    console.log(this.registerForm);

    // return si formulario es invalido
    if (this.registerForm.invalid) {
      return;
    }
  }

  onReset(): void {
    this.registerForm.reset();
    this.termsOfServiceResult = false;
    this.termsOfServiceTouched = false;
  }

  openDialog(): void {
    this.termsOfServiceTouched = true;
    const dialogRef = this.dialog.open(TermsOfServiceComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result == undefined) {
        result = false;
      }
      this.termsOfServiceResult = result;
    });
  }
}

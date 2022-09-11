import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MustMatch } from "src/app/shared/validators/pass-match.validator";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
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
      },
      {
        validator: MustMatch("password", "confirmPassword"),
      }
    );
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
  }

  openDialog() {
    const dialogRef = this.dialog.open(TermsOfServiceComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: "terms-of-service",
  templateUrl: "terms-of-service.component.html",
})
export class TermsOfServiceComponent {}

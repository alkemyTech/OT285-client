import { AbstractControl } from '@angular/forms';

export function ImageValidator(control: AbstractControl): { InvalidType:boolean } | null  {
  if (control.value.type == "image/jpeg" || control.value.type == "image/png") {
    return null;
  }
  return { InvalidType: true };
}
import { AbstractControl } from '@angular/forms';

export function ImageValidator(control: AbstractControl) {
  if (control.value.type != "image/jpeg") {
    return { InvalidType: true };
  }
  return null;
}
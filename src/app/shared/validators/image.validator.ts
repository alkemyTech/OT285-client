import { AbstractControl } from '@angular/forms';

export function ImageValidator(control: AbstractControl): { InvalidType:boolean } | null  {
  if (control.value.type == "image/jpeg" || control.value.type == "image/png") {
    return null;
  }
  if (!control.value.type) {
    let controlArray = control.value.split(".");
    let controlType = controlArray[controlArray.length - 1].toLowerCase();
    if (controlType == "jpg" || controlType == "png" || controlType == "jpeg") {
      return null;
    }
  }
  return { InvalidType: true };
}

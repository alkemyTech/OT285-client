import { AbstractControl } from '@angular/forms';

export function ImageValidator(control: AbstractControl): { InvalidType:boolean } | null  {
  if (control.value.type == "image/jpeg" || control.value.type == "image/png") {
    return null;
  }
  if (!control.value.type) {
    let controlEdgeArray = control.value.split(".");
    let controlEdgeType =
      controlEdgeArray[controlEdgeArray.length - 1].toLowerCase();
    console.log(controlEdgeType);
    if (
      controlEdgeType == "jpg" ||
      controlEdgeType == "png" ||
      controlEdgeType == "jpeg"
    ) {
      return null;
    }
  }
  return { InvalidType: true };
}

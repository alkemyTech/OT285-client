import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  snackDuration: number = 3000;

  constructor(private snackBar: MatSnackBar) { }

  succes(msg: string): void {
    this.snackBar.open(msg, "Cerrar", {
      duration: this.snackDuration,
      panelClass: ["snack-success"]
    });
  }

  info(msg: string): void {
    this.snackBar.open(msg, "Cerrar", {
      duration: this.snackDuration,
      panelClass: ["snack-info"]
    });
  }

  error(msg: string): void {
    this.snackBar.open(msg, "Cerrar", {
      duration: this.snackDuration,
      panelClass: ["snack-error"]
    });
  }
}

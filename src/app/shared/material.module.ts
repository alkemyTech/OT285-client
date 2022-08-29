import { NgModule } from "@angular/core";
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    MatTableModule,
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    MatTableModule,
  ],
})
export class MaterialModule {}

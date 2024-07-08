import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    ClipboardModule,
    MatSnackBarModule,
    MatTooltipModule
  ]
})
export class AngularMaterialModule { }

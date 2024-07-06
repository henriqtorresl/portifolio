import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class AngularMaterialModule { }

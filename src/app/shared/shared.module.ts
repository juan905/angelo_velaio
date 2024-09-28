import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }

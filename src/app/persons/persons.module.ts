import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonsRoutingModule } from './person-routing.module';



@NgModule({
  declarations: [
    PersonFormComponent,
    PersonListComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule
  ]
})
export class PersonsModule { }

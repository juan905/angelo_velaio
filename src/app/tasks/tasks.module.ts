import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar esto

import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRoutingModule } from './task-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent
  ]
})
export class TasksModule { }

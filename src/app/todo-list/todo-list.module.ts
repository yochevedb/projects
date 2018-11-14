import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TaskComponent } from './task.component';
import {FormsModule} from '@angular/forms';

import {MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
       MatTableModule,
        MatInputModule,
        MatSortModule
  } from '@angular/material'



@NgModule({
  declarations: [TodoListComponent, TaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    /*material*/
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule,
    MatSortModule
  
  ],
  exports:[TodoListComponent]
})
export class TodoListModule { }

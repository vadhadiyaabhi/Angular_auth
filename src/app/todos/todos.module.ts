import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ToDosComponent } from '../to-dos/to-dos.component';
import { CompletedTodosComponent } from '../completed-todos/completed-todos.component';
import { AddTodosComponent } from '../add-todos/add-todos.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoRoutingModule } from '../todo-routing.module';



@NgModule({
  declarations: [
    ToDosComponent,
    CompletedTodosComponent,
    AddTodosComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ]
})
export class TodosModule { }

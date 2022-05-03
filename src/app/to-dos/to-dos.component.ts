import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsapScheduler } from 'rxjs/internal/scheduler/AsapScheduler';
import { Todo } from 'src/app/Todos';
import { AuthService } from '../Auth/auth.service';
import { TodoService } from '../TodoService/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  todos: any = [];
  localItem: string;
  constructor(private _todoService: TodoService, private _authService: AuthService) {
    // this.localItem = localStorage.getItem("todos") || '';
    // if(this.localItem == ''){
    //   this.todos = [];
    // }else{
    //   this.todos = JSON.parse(this.localItem);
    // }
    // console.log(typeof(this.todos));
    this._authService.activeLoginClass.next(false);
   }

  ngOnInit(): void {
    // this.todoService.getTodos().subscribe(data =>{ this.todos = data});
    this.todos = this._todoService.getTodos();
    console.log(this.todos);
  }

  deleteTodo(todo:Todo){
    // const index = this.todos.indexOf(todo);
    // if (index > -1) {
    //   this.todos.splice(index, 1);
    //   localStorage.setItem("todos", JSON.stringify(this.todos));
    // }
    this._todoService.deleteTodo(todo);
    this.todos = this._todoService.getTodos();
  }

  addNewTodo(todo: Todo){
    todo.sno = this.todos.length + 1;
    // this.todos.push(todo);
    // localStorage.setItem("todos", JSON.stringify(this.todos));
    this._todoService.addTodo(todo);
    this.todos = this._todoService.getTodos();
    
  }

  completeTodo(todo: Todo){
    // const index = this.todos.indexOf(todo);
    // this.todos[index].active = false;
    // localStorage.setItem("todos", JSON.stringify(this.todos));
    this._todoService.completeTodo(todo);
  }

}

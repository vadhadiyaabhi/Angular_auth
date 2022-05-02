import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todos';
import { TodoService } from '../TodoService/todo.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CompletedTodosComponent implements OnInit {

  @Input() i: number;
  @Input() todo: Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();
  todos: Todo[];
  localItem: string;

  constructor(private _todoService: TodoService) { 
    
  }

  ngOnInit(): void {
    this.todos = this._todoService.getTodos();
  }

  onClick(todo: Todo){
    // console.log(todo);
    // const index =  this.todos.indexOf(todo);
    // if(index > -1){
    //   this.todos.splice(index, 1);
    //   localStorage.setItem("todos", JSON.stringify(this.todos))
    // }
    this._todoService.deleteTodo(todo);
  }
}

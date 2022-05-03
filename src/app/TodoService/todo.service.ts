import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../Auth/auth.service';
import { Todo } from '../Todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  public obsTodos : Observable<Todo[]>;
  public todos: Todo[];
  private localItem : string;
  private url: string = "/assets/Data/todos.json";
  constructor(private _authService: AuthService) { 
    this.localItem = localStorage.getItem("todos") || "";
    if(this.localItem == ''){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  getTodos(): Todo[]{
    //return this.http.get<Todo[]>(this.url);
    let user_id = this._authService.getLoggedInUserID();
    console.log(user_id);
    return this.todos.filter(x => x.user_id === user_id);
  }

  addTodo(todo: Todo){
    todo.user_id = this._authService.getLoggedInUserID();
    console.log(todo.user_id);
    this.todos.push(todo);
    console.log(this.todos);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
    // const index = this.todos.indexOf(todo);
    // this.todos[index].active = false;
    // localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  completeTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = false;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
}

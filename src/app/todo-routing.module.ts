import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
import { ToDosComponent } from './to-dos/to-dos.component';

const routes: Routes = [
    // {
    //     path : '', children: [
    //         { path: 'MyTodos', component: ToDosComponent, canActivate: [AuthGuard] },
    //         { path: 'CompletedTodos', component: CompletedTodosComponent, canActivate: [AuthGuard] },
    //     ]
    // }
    { path: 'MyTodos', component: ToDosComponent, canActivate: [AuthGuard] },
    { path: 'CompletedTodos', component: CompletedTodosComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }

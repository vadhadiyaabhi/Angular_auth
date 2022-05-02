import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingService } from './custom-preloading.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
// import { AuthGuard } from './auth.guard';
// import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
// import { ToDosComponent } from './to-dos/to-dos.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'Home', component: HomeComponent },
  {
    path: 'todos', 
    data: { preload: true},
    loadChildren: () => import('./todos/todos.module').then(x => x.TodosModule) //'./todos/todos.module#TodosModule'
  },
  // { path: 'MyTodos', component: ToDosComponent, canActivate: [AuthGuard] },
  // { path: 'CompletedTodos', component: CompletedTodosComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

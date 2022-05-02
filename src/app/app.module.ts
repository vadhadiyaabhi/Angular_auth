import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { ToDosComponent } from './to-dos/to-dos.component';
// import { CompletedTodosComponent } from './completed-todos/completed-todos.component';
// import { AddTodosComponent } from './add-todos/add-todos.component';
// import { TodoItemComponent } from './todo-item/todo-item.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './Auth/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    // ToDosComponent,
    // CompletedTodosComponent,
    // AddTodosComponent,
    // TodoItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // TodosModule,      // ----- Must be before AppRoutingModule -- IMP NOTE
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    // FormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

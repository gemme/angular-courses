import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { DataStudentComponent } from './components/students/data-student/data-student.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    HeaderComponent,
    StudentsComponent,
    StudentsListComponent,
    DataStudentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

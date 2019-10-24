import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UnauthGuard } from './guards/unauth.guard';


const routes: Routes = [
  {path: 'auth', redirectTo: 'auth/login', pathMatch: "full"},
  {path: 'auth/login', component: LoginComponent, canActivate: [UnauthGuard]},
  {path: 'auth/logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

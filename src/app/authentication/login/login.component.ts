import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: any = {};

  constructor(
        private router: Router,
        private sessionService: SessionService,
        private loginService: LoginService) { }

  ngOnInit() {
    if(this.sessionService.isAuthenticated()){
      this.router.navigate(['/dashboard']);
    }
  }

  login(){
    console.log('he sido clickeado');
    this.loginService.login(this.credentials);
    this.sessionService.saveSession({
      token: '123'
    });
    this.router.navigate(['/']);
  }

  validateKey(e){
    if(e.key === "Enter"){
      this.login();
    }
  }
}

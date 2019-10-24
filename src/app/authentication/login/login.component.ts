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
    /* if(this.sessionService.isAuthenticated()){
      this.router.navigate(['/dashboard']);
    } */
  }

  login(){
    console.log('he sido clickeado');
    this.loginService.login(this.credentials).then(response => {
        console.log('response, response');
        this.sessionService.saveSession(response);
        /* this.sessionService.saveSession(response);
        this.router.navigate(['/']); */
        const tokenStr = this.sessionService.getSession();
        this.loginService.getUserData(tokenStr).then(response => {
          this.sessionService.saveUser(response);
          this.router.navigate(['/']);
        }).catch(err => {
          console.error('logged but user not found');
        });
      }).catch(err => {
        console.log('credentials incorrect');
      });
  }

  loginAsObservable(){
    console.log('he sido clickeado');
    this.loginService.loginAsObservable(this.credentials)
      .subscribe(
        response => {
          console.log('Response', response);
        },
        err => {
          console.log('Error', err);
      })
  }

  validateKey(e){
    if(e.key === "Enter"){
      this.login();
    }
  }
}

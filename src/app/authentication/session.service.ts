import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private target = localStorage;
  private sessionItem: string = 'app-session';
  private userItem: string = 'app-user';
  authenticated: BehaviorSubject<boolean>;


  constructor() {
    this.authenticated = new BehaviorSubject(this.isAuthenticated());
   }

  saveSession(data){
    const dataStr = JSON.stringify(data);
    this.target.setItem(this.sessionItem, dataStr);
    this.authenticated.next(true);
  }

  getSession(){
    return this.target.getItem(this.sessionItem);
  }

  getSessionToken() {
    if(this.isAuthenticated()){
      const session = this.getSession();
      const sessionObj = JSON.parse(session);
      return sessionObj.token;
    }
  }

  clearSession() {
    this.target.clear();
    this.authenticated.next(false);
  }

  isAuthenticated(){
    return !!this.target.getItem(this.sessionItem);
  }

  saveUser(data){
    const dataStr = JSON.stringify(data);
    this.target.setItem(this.userItem, dataStr);
  }
}

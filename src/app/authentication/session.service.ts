import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private target = localStorage;
  private sessionItem: string = 'app-session';
  constructor() { }

  saveSession(data){
    const dataStr = JSON.stringify(data);
    this.target.setItem(this.sessionItem, dataStr);
  }

  getSession(){
    return this.target.getItem(this.sessionItem);
  }

  clearSession() {
    this.target.clear();
  }

  isAuthenticated(){
    return !!this.target.getItem(this.sessionItem);
  }
}

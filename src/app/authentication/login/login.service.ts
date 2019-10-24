import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login({
    userName,
    password
  }) {
    console.log('userName', userName);
    console.log('password', password);
  }
}

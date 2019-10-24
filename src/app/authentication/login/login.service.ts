import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials) {
    console.log('credentials', credentials);
    console.log('environment.apiURL', environment.apiURL);
    const url = environment.apiURL + 'login';
    return this.httpClient.post(url, credentials).toPromise();
  }

  loginAsObservable(credentials) {
    console.log('credentials', credentials);
    console.log('environment.apiURL', environment.apiURL);
    const url = environment.apiURL + 'login';
    return this.httpClient.post(url, credentials);
  }

  getUserData(tokenStr) {
    const token = JSON.parse(tokenStr);
    const url = environment.apiURL + 'me';
    return this.httpClient.post(url, token).toPromise();
  }
}

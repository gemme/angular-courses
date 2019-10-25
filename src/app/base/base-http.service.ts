import { Injectable } from '@angular/core';

import { SessionService } from '../authentication/session.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(private httpClient: HttpClient, private session: SessionService) { }

  get(url: string){
    const token = this.session.getSessionToken();
    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': token
    });

    return this.httpClient.get(url, {
      headers: httpHeaders
    }).toPromise();
  }
}

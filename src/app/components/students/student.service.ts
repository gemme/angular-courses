import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SessionService } from 'src/app/authentication/session.service';
import { BaseHttpService } from 'src/app/base/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient,
    private session: SessionService,
    private baseHttpService: BaseHttpService) { }

  getStudents() {
    const token = this.session.getSessionToken();
    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': token
    });
    const url = environment.dataApi + 'users';
    return this.httpClient.get(url, {
      headers: httpHeaders
    }).toPromise();
  }

  /* getStudents() {
    const url = environment.dataApi + 'users';
    return this.baseHttpService.get(url);
  }
 */
  getStudentData(studentId: number) {
    const token = this.session.getSessionToken();
    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': token
    });
    const url = environment.dataApi + 'users/' + studentId;
    return this.httpClient.get(url, {
      headers: httpHeaders
    }).toPromise();
  }
}

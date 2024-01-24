import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  serverBaseUrl = environment.serverBaseUrl;

  constructor(private http: HttpClient) { }

  saveUser(userData: any): Observable<any> {
    return this.http.post(`${this.serverBaseUrl}/api/attandance`, userData);
  }

  getAttendees(): Observable<any> {
    return this.http.get(`${this.serverBaseUrl}/api`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  x: string;

  get<T>(url: string): Observable<any> {
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}

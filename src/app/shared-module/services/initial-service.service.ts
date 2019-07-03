import { Injectable } from '@angular/core';
import { DataRequestService } from 'src/app/shared-module/services/data-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialServiceService {

  clickCounter = 0;

  constructor(private req: DataRequestService) { }

  incrementClickCounter(): void {
    this.clickCounter++;
    console.log(this.clickCounter);
  }

  getUserData(): Observable<any> {
    return this.req.get('http://localhost:8080/user/all');
  }

  postUserData(user): Observable<any> {
    return this.req.post('', user);
  }
}

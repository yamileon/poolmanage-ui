import { Injectable } from '@angular/core';
import { DataRequestService } from 'src/app/shared-module/services/data-request.service';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/users/interfaces/iuser';

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

  getUserData(): Observable<Iuser> {
    return this.req.get<Iuser>('http://localhost:8080/user/all');
  }

  getOneUser(username: Iuser): Observable<Iuser> {
    console.log(username.username);
    let urlString = 'http://localhost:8080/user/byUsername?username=' + username.username;
    console.log(urlString);
    return this.req.getOne<Iuser>(urlString);

  }

  postUserData<Iuser>(user: Iuser): Observable<Iuser> {
    return this.req.post<Iuser>('http://localhost:8080/user/create', user);
  }

  deleteUserById<Iuser>(id: string): Observable<Iuser> {
    return this.req.delete<Iuser>(`http://localhost:8080/user/deleteUser/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/services/request.service';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class QueuesService {
  clickCounter = 0;

  constructor(private req: RequestService) { }

  getUserData(url: string): Observable<IUser[]> {
    return this.req.get<IUser[]>(url);
  }

  postUserData<Iuser>(url: string, user: IUser): Observable<Iuser[]> {
   
    return this.req.post<Iuser[]>(url, user);
  }

  deleteUserData<Iuser>(url: string, user: IUser): Observable<Iuser[]>{
    return this.req.delete<Iuser[]>(url,user);
  }
}


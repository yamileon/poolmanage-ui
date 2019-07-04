import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService as Request } from '../../services/request.service' ;
import { map, filter, tap } from 'rxjs/operators';
import { RulesInterface } from '../interfaces/rules-interface';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  //variables
  
  constructor(private req: Request) { }
  //get a rule

  get() : Observable<RulesInterface> {
    return this.req.get<RulesInterface>("../../../assets/output.json").pipe(
      tap((x) => {
        x.name;
      })
    );
  }

  say(){
    console.log("hello");
  }

}

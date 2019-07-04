import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { RulesInterface } from '../interfaces/rules-interface';
import { RequestService as Request } from '../../services/request.service' ;

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  //variables
  
  constructor(private request: Request) { }
  //get a rule

  get() : Observable<RulesInterface> {
    return this.request.get<RulesInterface>("/assets/output.json");//.pipe(
    //   tap((x) => {.,daf,
    //     x.name;
    //   })
    // );
  }

  say(){
    console.log("hello");
  }

}

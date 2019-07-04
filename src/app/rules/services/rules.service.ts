import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { RulesInterface } from '../interfaces/rules-interface';
import { RequestService as Request } from '../../request-service.service' ;

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  //variables
  
  constructor(private http: HttpClient, private request: Request) { }
  //get a rule

  get(url : string) : Observable<RulesInterface> {
    return this.request.get<RulesInterface>("/assets/output.json").pipe(
      tap((x) => {
        x.name;
      })
    );
    // return this.http.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    // .pipe(
    //   map(x => {
    //       return x = ' and stuff';
    //   }
    // ))
    //filter((x) => !!x)
  }

  say(){
    console.log("hello");
  }

}

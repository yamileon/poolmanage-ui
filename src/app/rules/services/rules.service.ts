import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  //variables
  
  constructor(private http: HttpClient) { }
  //get a rule

  get(url : string) : Observable<any> {
    return this.http.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .pipe(
      map(x => {
          return x = ' and stuff';
      }
    ))
    //filter((x) => !!x)
  }

  say(){
    console.log("")
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  //variables
  
  constructor(private http: HttpClient) { }
  //get a rule

  get(){
    return this.http.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
  }

}

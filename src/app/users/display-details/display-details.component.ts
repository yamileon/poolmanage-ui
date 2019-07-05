import { Component, OnInit, Input } from '@angular/core';
import { Iuser } from '../interfaces/iuser';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent implements OnInit {

   userObject: Iuser;
   userKeys: string[];

  @Input() set user(u: Iuser) {
    this.userObject = u;
    this.userKeys = Object.keys(u || {});
  }

  constructor() { }

  ngOnInit() {
  }

}

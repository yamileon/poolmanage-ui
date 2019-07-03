import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from '../../shared-module/services/initial-service.service';
import { request } from 'http';
import { DataRequestService } from 'src/app/shared-module/services/data-request.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private serv: InitialServiceService) { }

  ngOnInit() {
  }

  clicked() {
    this.serv.getUserData().subscribe((x) => {
      console.log('WHY DOES THIS WORK NOW', x)
    });
  }

}

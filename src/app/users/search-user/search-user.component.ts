import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from 'src/app/shared-module/services/initial-service.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  constructor(private serv: InitialServiceService) { }

  ngOnInit() {
  }

  getAllUsers() {
    this.serv.getUserData().subscribe((x) => {
      console.log('WHY DOES THIS WORK NOW', x);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from '../../shared-module/services/initial-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private serv: InitialServiceService) { }

  ngOnInit() {
  }

  clicked(): void {
    this.serv.incrementClickCounter();
  } 

}

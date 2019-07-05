import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from 'src/app/shared-module/services/initial-service.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {

  constructor(private serv: InitialServiceService) { }

  ngOnInit() {
  }

  removeById() {
    this.serv.deleteUserById(id).subscribe((x) =>{
      console.log("userDeleted");
    });
  }

}

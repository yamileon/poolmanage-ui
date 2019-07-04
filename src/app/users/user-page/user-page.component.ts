import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from '../../shared-module/services/initial-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User, Iuser } from '../interfaces/iuser';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  loginForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl('')
  });

  constructor(private serv: InitialServiceService) { }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe((val) => {
      console.log('Group', val);
    });
  }

  loginFormSubmitted() {
    console.log('Submitted');
  }

  clicked() {
    this.serv.getUserData().subscribe((x) => {
      console.log('WHY DOES THIS WORK NOW', x);
    });
  }

  addUser() {
    const user: Iuser = this.loginForm.value;
    this.serv.postUserData(user).subscribe((x) =>{
      console.log('It might have worked');
    })
  }

  deleteUser() {
  }

}

import { Component, OnInit } from '@angular/core';
import { QueuesService } from '../../services/queues.service';
import { FormControl, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import {User} from "../../interfaces/iuser"


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})



export class TableComponent implements OnInit{
  
loginForm = new FormGroup({
    player1name:new FormControl('', Validators.required), //Sets default
    player2name:new FormControl(''),
    gameRules:new FormControl(0)
});


  constructor(private queue: QueuesService){
    
  }
  ngOnInit(): void {
    
    
  }
  
  p1Name;
  p2Name;
  ruleSet;
  clicked(){
  this.queue.getUserData("http://localhost:8080/get")
  .subscribe((data) => {
    //for(var x = 0; x < data.length; x++){
      this.p1Name = data[0].player1name;
      //}
      this.p2Name = data[0].player2name;
      this.ruleSet = data[0].gameRules;
      console.log(data[0].id);
  });
  }

  
  clicked2(){
    const user: User = this.loginForm.value;
    
    this.queue.postUserData("http://localhost:8080/addQueue", user).subscribe((x) =>{
      console.log('POST REQUEST COMPLETE', x);  
    })
  }

  delete(){
    const user: User = this.loginForm.value;

    this.queue.deleteUserData("http://localhost:8080/delete", user).subscribe((x)=>{
      console.log('Delete complete', x);
    })
  }
}
 



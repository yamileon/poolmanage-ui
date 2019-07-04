import { Component, OnInit } from '@angular/core';
import { RulesService } from './../../services/rules.service';
import { FormControl, FormGroupDirective, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rules-table',
  templateUrl: './rules-table.component.html',
  styleUrls: ['./rules-table.component.scss']
})
export class RulesTableComponent implements OnInit {

  ruleForm = new FormGroup({
    ruleName: new FormControl('', Validators.required)
  })

  //ruleName = new FormControl('');

  constructor(private rules_service: RulesService) { }

  ngOnInit() {
    // this.ruleName.valueChanges.subscribe((val) => {
    //   console.log("value : ", val);
    // })
  }

  clicked(){
    this.rules_service.get;
    
  }

}

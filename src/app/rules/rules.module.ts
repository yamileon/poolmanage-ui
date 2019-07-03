import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesTableComponent } from './components/rules-table/rules-table.component';



@NgModule({
  declarations: [
    RulesTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RulesTableComponent
  ]
})
export class RulesModule { }

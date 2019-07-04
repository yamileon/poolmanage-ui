import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesTableComponent } from './components/rules-table/rules-table.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { RequestService } from '../services/request.service';

@NgModule({
  declarations: [
    RulesTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    RulesTableComponent,
    //RequestService
  ],
  providers: [
    RulesModule
  ]
})

export class RulesModule { }

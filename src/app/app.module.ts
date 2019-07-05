import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ScoresModule } from './scores/scores.module';
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RulesComponent } from './rules/component/rules/rules.component';
import { TableComponent } from './queues/component/table/table.component';
import { QueuesModule } from './queues/queues.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RulesComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpClientModule,
    UsersModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ScoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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

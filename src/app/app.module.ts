import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ScoresModule } from './scores/scores.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule
    AppRoutingModule,
    ReactiveFormsModule,
    ScoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

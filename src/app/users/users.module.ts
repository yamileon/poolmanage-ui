import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user/search-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserPageComponent } from './user-page/user-page.component';
import { InitialServiceService } from '../shared-module/services/initial-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

@NgModule({
  declarations: [SearchUserComponent, UpdateUserComponent, UserPageComponent, RemoveUserComponent, DisplayDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchUserComponent,
    UpdateUserComponent,
    UserPageComponent
  ],
  providers: [
    InitialServiceService
  ]
})
export class UsersModule { }

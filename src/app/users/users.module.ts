import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user/search-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserPageComponent } from './user-page/user-page.component';
import { InitialServiceService } from '../shared-module/services/initial-service.service';

@NgModule({
  declarations: [SearchUserComponent, UpdateUserComponent, UserPageComponent],
  exports: [
    SearchUserComponent,
    UpdateUserComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    InitialServiceService
  ]
})
export class UsersModule { }

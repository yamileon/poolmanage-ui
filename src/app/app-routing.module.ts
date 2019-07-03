import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from './scores/userprofile/userprofile.component';
import { ScoresModule } from './scores/scores.module';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'scores', component: ScoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

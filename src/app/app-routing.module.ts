import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesTableComponent} from './rules/components/rules-table/rules-table.component';

const routes: Routes = [
  {path: `rules`, component: RulesTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

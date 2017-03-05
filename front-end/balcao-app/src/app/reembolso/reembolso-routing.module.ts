import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReembolsoComponent } from './reembolso.component';

const routes: Routes = [
  { path: "reembolso", component: ReembolsoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReembolsoRoutingModule { }

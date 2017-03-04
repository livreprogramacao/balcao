import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrocaComponent } from './troca.component';

const routes: Routes = [
  { path: "troca", component: TrocaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TrocaRoutingModule { }

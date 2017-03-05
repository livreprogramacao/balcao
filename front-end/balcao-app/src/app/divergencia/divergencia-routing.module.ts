import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivergenciaComponent } from './divergencia.component';

const routes: Routes = [
  { path: "divergencia", component: DivergenciaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DivergenciaRoutingModule { }

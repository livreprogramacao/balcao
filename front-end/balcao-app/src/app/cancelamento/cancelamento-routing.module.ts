import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelamentoComponent } from './cancelamento.component';

const routes: Routes = [{ path: "cancelamento", component: CancelamentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CancelamentoRoutingModule { }

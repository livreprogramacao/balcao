import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnulacaoComponent } from './anulacao.component';

const routes: Routes = [
  { path: "anulacao-reembolso", component: AnulacaoComponent },
  { path: "anulacao-scupom", component: AnulacaoComponent },
  { path: "anulacao-ccupom", component: AnulacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AnulacaoRoutingModule { }

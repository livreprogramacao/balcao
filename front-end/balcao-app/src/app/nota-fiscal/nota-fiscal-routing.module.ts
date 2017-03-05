import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotaFiscalComponent } from './nota-fiscal.component';

const routes: Routes = [ 
  { path: "nota-fiscal", component: NotaFiscalComponent},
  { path: "nota-fiscal-reimpressao", component: NotaFiscalComponent},
  { path: "nota-fiscal-doacao", component: NotaFiscalComponent},
  { path: "nota-fiscal-sair", component: NotaFiscalComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NotaFiscalRoutingModule { }

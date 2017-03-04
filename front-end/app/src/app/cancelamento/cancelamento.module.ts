import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelamentoRoutingModule } from './cancelamento-routing.module';
import { CancelamentoComponent } from './cancelamento.component';

@NgModule({
  imports: [
    CommonModule,
    CancelamentoRoutingModule
  ],
  declarations: [CancelamentoComponent]
})
export class CancelamentoModule { }

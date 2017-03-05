import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelamentoRoutingModule } from './cancelamento-routing.module';
import { CancelamentoComponent } from './cancelamento.component';

import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalModule,
    CancelamentoRoutingModule
  ],
  declarations: [CancelamentoComponent]
})
export class CancelamentoModule { }

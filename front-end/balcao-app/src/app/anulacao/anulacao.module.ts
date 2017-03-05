import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnulacaoRoutingModule } from './anulacao-routing.module';
import { AnulacaoComponent } from './anulacao.component';

import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalModule,
    AnulacaoRoutingModule
  ],
  declarations: [AnulacaoComponent]
})
export class AnulacaoModule { }

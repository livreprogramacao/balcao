import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';
import { TrocaRoutingModule } from './troca-routing.module';
import { TrocaComponent } from './troca.component';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalModule,
    TrocaRoutingModule
  ],
  declarations: [TrocaComponent]
})
export class TrocaModule { }

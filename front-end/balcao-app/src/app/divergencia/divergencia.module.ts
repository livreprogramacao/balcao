import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivergenciaRoutingModule } from './divergencia-routing.module';
import { DivergenciaComponent } from './divergencia.component';

import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalModule,
    DivergenciaRoutingModule
  ],
  declarations: [DivergenciaComponent]
})
export class DivergenciaModule { }

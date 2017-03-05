import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReembolsoRoutingModule } from './reembolso-routing.module';
import { ReembolsoComponent } from './reembolso.component';

import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalModule,
    ReembolsoRoutingModule
  ],
  declarations: [ReembolsoComponent]
})
export class ReembolsoModule { }

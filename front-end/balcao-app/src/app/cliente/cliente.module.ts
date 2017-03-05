import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';

import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteComponent]
})
export class ClienteModule { }

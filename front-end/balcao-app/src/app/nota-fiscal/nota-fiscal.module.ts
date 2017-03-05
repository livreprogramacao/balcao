import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaFiscalRoutingModule } from './nota-fiscal-routing.module';
import { NotaFiscalComponent } from './nota-fiscal.component';

import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalModule,
    NotaFiscalRoutingModule
  ],
  declarations: [NotaFiscalComponent]
})
export class NotaFiscalModule { }

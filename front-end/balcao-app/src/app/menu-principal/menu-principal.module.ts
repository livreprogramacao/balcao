import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalRoutingModule } from './menu-principal-routing.module';
import { MenuPrincipalComponent } from './menu-principal.component';

@NgModule({
  imports: [
    CommonModule,
    MenuPrincipalRoutingModule
  ],
  exports: [
    MenuPrincipalComponent
  ],
  declarations: [MenuPrincipalComponent]
})
export class MenuPrincipalModule { }

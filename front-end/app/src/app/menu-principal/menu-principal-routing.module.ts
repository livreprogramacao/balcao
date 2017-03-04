import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPrincipalComponent } from './menu-principal.component';

const routes: Routes = [
  { path: "menu", component: MenuPrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MenuPrincipalRoutingModule { }

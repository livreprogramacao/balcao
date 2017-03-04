import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivergenciaRoutingModule } from './divergencia-routing.module';
import { DivergenciaComponent } from './divergencia.component';

@NgModule({
  imports: [
    CommonModule,
    DivergenciaRoutingModule
  ],
  declarations: [DivergenciaComponent]
})
export class DivergenciaModule { }

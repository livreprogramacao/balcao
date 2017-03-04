import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaFiscalRoutingModule } from './nota-fiscal-routing.module';
import { NotaFiscalComponent } from './nota-fiscal.component';

@NgModule({
  imports: [
    CommonModule,
    NotaFiscalRoutingModule
  ],
  declarations: [NotaFiscalComponent]
})
export class NotaFiscalModule { }

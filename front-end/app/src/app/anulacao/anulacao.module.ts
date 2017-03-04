import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnulacaoRoutingModule } from './anulacao-routing.module';
import { AnulacaoComponent } from './anulacao.component';

@NgModule({
  imports: [
    CommonModule,
    AnulacaoRoutingModule
  ],
  declarations: [AnulacaoComponent]
})
export class AnulacaoModule { }

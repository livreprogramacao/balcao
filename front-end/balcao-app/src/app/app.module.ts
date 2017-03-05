import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { MenuPrincipalModule } from './menu-principal/menu-principal.module';
import { TrocaModule } from './troca/troca.module';
import { ReembolsoModule } from './reembolso/reembolso.module';
import { AnulacaoModule } from './anulacao/anulacao.module';
import { NotaFiscalModule } from './nota-fiscal/nota-fiscal.module';
import { DivergenciaModule } from './divergencia/divergencia.module';
import { CancelamentoModule } from './cancelamento/cancelamento.module';
import { ClienteModule } from './cliente/cliente.module';


@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    TrocaModule,
    ReembolsoModule,
    AnulacaoModule,
    NotaFiscalModule,
    DivergenciaModule,
    CancelamentoModule,
    ClienteModule,
    MenuPrincipalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

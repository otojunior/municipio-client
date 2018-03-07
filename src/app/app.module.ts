import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MunicipioListagemComponent } from './view/municipio/municipio-listagem/municipio-listagem.component';
import { MunicipioEdicaoComponent } from './view/municipio/municipio-edicao/municipio-edicao.component';


@NgModule({
  declarations: [
    AppComponent,
    MunicipioListagemComponent,
    MunicipioEdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

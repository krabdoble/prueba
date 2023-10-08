import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { Prueba1Component } from './componentes/prueba1/prueba1.component';
import { BotonesComponent } from './componentes/botones/botones.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { BuclesComponent } from './componentes/bucles/bucles.component';
import { SwitchComponent } from './componentes/switch/switch.component';
import {HttpClientModule } from '@angular/common/http'
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

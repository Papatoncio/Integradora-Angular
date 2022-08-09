import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Components/inicio/inicio.component';

import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { CrearEncuestasComponent } from './Components/crear-encuestas/crear-encuestas.component';
import { EncuestasCreadasComponent } from './Components/encuestas-creadas/encuestas-creadas.component';
import { CalisComponent } from './Components/calis/calis.component';

import { FormsModule } from '@angular/forms';
import { ListarPreguntasComponent } from './Components/listar-preguntas/listar-preguntas.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CrearEncuestasComponent,
    EncuestasCreadasComponent,
    CalisComponent,
    ListarPreguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { CrearEncuestasComponent } from './Components/crear-encuestas/crear-encuestas.component';
import { EncuestasCreadasComponent } from './Components/encuestas-creadas/encuestas-creadas.component';
import { CalisComponent } from './Components/calis/calis.component';
import { ListarPreguntasComponent } from './Components/listar-preguntas/listar-preguntas.component';

const routes: Routes = [
  {path:'inicio.html', component:InicioComponent},
  {path:'login.html', component:LoginComponent},
  {path:'registro.html', component:RegistroComponent},
  {path:'Creacion_Encuestas.html', component:CrearEncuestasComponent},
  {path:'Encuestas_Realizadas.html', component:EncuestasCreadasComponent},
  {path:'calis', component:CalisComponent},
  {path:'ListarPreguntas', component:ListarPreguntasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { encuesta } from 'src/app/modelo/encuesta';
import { profesor } from 'src/app/modelo/profesor';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-crear-encuestas',
  templateUrl: './crear-encuestas.component.html',
  styleUrls: ['./crear-encuestas.component.css']
})
export class CrearEncuestasComponent implements OnInit {

  encuesta:encuesta=new encuesta();
  profesor:profesor=new profesor();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  Crear(encuesta:encuesta) {
    this.service.createEncuesta(encuesta)
    .subscribe(data=>{alert ("Encuesta Creada con Exito");
    this.router.navigate(["Encuestas_Realizadas.html"])});
  }

  Guardar(profesor:profesor) {
    this.service.createProfesor(profesor)
    .subscribe(data=>{alert ("Pregunta Guardada con Exito");
  });
  }
}

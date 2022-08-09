import { Component, OnInit } from '@angular/core';
import { profesor } from 'src/app/modelo/profesor';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-preguntas',
  templateUrl: './listar-preguntas.component.html',
  styleUrls: ['./listar-preguntas.component.css']
})
export class ListarPreguntasComponent implements OnInit {

  profesores:profesor[];
  constructor(private service:ServiceService, private router:Router) { }
  
  ngOnInit(){
    this.service.getProfesor()
    .subscribe(data => {
      this.profesores=data;
    })
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { encuesta } from 'src/app/modelo/encuesta';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-encuestas-creadas',
  templateUrl: './encuestas-creadas.component.html',
  styleUrls: ['./encuestas-creadas.component.css']
})
export class EncuestasCreadasComponent implements OnInit {

  encuestas:encuesta[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getEncuesta()
    .subscribe(data => {
      this.encuestas=data;
    })
  }
}

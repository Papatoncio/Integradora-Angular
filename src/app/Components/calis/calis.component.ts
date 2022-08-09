import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/modelo/usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-calis',
  templateUrl: './calis.component.html',
  styleUrls: ['./calis.component.css']
})
export class CalisComponent implements OnInit {

  usuarios:any[]=[];
  constructor(private service:ServiceService, private router:Router) { }
  
  ngOnInit(){
    this.service.getUsuario()
    .subscribe((data: any) => {
      this.usuarios=data['_embedded']['usuarios'];
    })
  }
  }
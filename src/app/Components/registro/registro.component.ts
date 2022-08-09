import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { usuario } from 'src/app/modelo/usuario'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:usuario=new usuario();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  Registrar(usuario:usuario) {
    this.service.createUsuario(usuario)
    .subscribe(data=>{alert ("Usuario registrado con exito");
    this.router.navigate(["calis"])});
   
  }
}
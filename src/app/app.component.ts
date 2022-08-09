import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { alumno } from './modelo/alumno';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Integradora';

  name = 'Angular ' + VERSION.major;

  constructor(private service:ServiceService, private router:Router) {}

  ngOnInit():void{}
}
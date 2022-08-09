import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { usuario } from '../modelo/usuario';
import { alumno } from '../modelo/alumno';
import { Observable } from 'rxjs';
import { encuesta } from '../modelo/encuesta';
import { profesor } from '../modelo/profesor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  alumno:alumno[];
  encuesta:encuesta[];
  profesor:profesor[];
  usuario:usuario[];
  constructor(private http:HttpClient) { }

  private UrlUsr='http://localhost:8080/usuarios';
  private UrlPro='http://localhost:8080/profesor';
  private UrlAlu = 'http://localhost:8080/alumno';
  private UrlEnc = 'http://localhost:8080/encuestas';



  getAlumno():Observable<alumno[]>{
    return this.http.get<alumno[]>(`${this.UrlAlu}`);
  }

  createAlumno(alumno:alumno):Observable<alumno[]>{
    return this.http.post<alumno[]>(this.UrlAlu,alumno);
  }

  getEncuesta():Observable<encuesta[]>{
    return this.http.get<encuesta[]>(`${this.UrlEnc}`);
  }

  createEncuesta(encuesta:encuesta):Observable<encuesta[]>{
    return this.http.post<encuesta[]>(this.UrlEnc,encuesta);
  }

  getProfesor():Observable<profesor[]>{
    return this.http.get<profesor[]>(`${this.UrlPro}`);
  }

  createProfesor(profesor:profesor):Observable<profesor[]>{
    return this.http.post<profesor[]>(this.UrlPro,profesor);
  }

  getUsuario():Observable<usuario[]>{
    return this.http.get<usuario[]>(`${this.UrlUsr}`);
  }

  createUsuario(usuario:usuario):Observable<usuario[]>{
    return this.http.post<usuario[]>(this.UrlUsr,usuario);
  }
}
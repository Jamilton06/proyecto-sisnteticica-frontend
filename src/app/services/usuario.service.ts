import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/Usuario';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient,) { }

  private URL = "http://localhost:8080/api/v1";

  listarUsuarios() {
    return this.http.get<Usuario[]>(`${this.URL}/`);
  }

  traerUsuario(username: String) {
    return this.http.get<Usuario[]>(`${this.URL}/${username}`);
  }



}

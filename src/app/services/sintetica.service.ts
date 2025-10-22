import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sintetica } from '../modelo/Sintetica';

@Injectable({
  providedIn: 'root'
})
export class SinteticaService {


  constructor(private http: HttpClient,) { }

  private URL = "http://localhost:8080/api/v1/sintetica/";

  listarSinteticas(): Observable<Sintetica[]> {
    return this.http.get<Sintetica[]>(`${this.URL}`);
  }


}

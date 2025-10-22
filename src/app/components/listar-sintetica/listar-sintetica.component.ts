import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sintetica } from 'src/app/modelo/Sintetica';

import { SinteticaService } from 'src/app/services/sintetica.service';

@Component({
  selector: 'app-listar-sintetica',
  templateUrl: './listar-sintetica.component.html',
  styleUrls: ['./listar-sintetica.component.css']
})
export class ListarSinteticaComponent implements OnInit {


  constructor(private sinteticaService: SinteticaService, private router: Router) { }

  sinteticas: Sintetica[] = [];



  ngOnInit(): void {

    this.ListarSinteticas();


  }

  private ListarSinteticas() {
    this.sinteticaService.listarSinteticas().subscribe((registros) => {

      for (let i = 0; i <= registros.length; i++) {
        this.sinteticas[i] = registros[i];

        if (this.sinteticas.length == 0) {
          this.router.navigate(['/login']);
        }

      }
    });


  }



}

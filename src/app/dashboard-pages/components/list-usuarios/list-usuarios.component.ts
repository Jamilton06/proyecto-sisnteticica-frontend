import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})

export class ListUsuariosComponent implements OnInit {

  constructor(private sinteticaService: UsuarioService) { }

  usuarios: any;
  contador = 0;
  displayedColumns: string[] = ['name', 'lastname', 'city', 'email'];


  ngOnInit(): void {

    this.Listar();


  }

  private Listar() {
    this.sinteticaService.listarUsuarios().subscribe((registros) => {

      for (let i = 0; i <= registros.length; i++) {
        this.usuarios = registros;



      }
    });


  }



}

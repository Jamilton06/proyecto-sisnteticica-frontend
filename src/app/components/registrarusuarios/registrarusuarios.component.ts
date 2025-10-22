import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/Auth/AuthService';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarusuarios',
  templateUrl: './registrarusuarios.component.html',
  styleUrls: ['./registrarusuarios.component.css']
})
export class RegistrarusuariosComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UsuarioService, private snack: MatSnackBar) { }
  ngOnInit(): void {
  }

  usuarioNuevo: Usuario = new Usuario;
  UsuarioDuplicado: undefined;

  registrar() {
    if (this.usuarioNuevo.username == '' || this.usuarioNuevo.username == null) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.traerUsuario(this.usuarioNuevo.username).subscribe(usuario => {
      console.log(usuario)
      if (usuario != null) {

        this.snack.open('Username No esta disonible, ya registrado por otra persona !!', 'Aceptar', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        return;
      } else {
        this.authService.guardadarUsuario(this.usuarioNuevo).subscribe((registro) => {

          Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
        }, (error) => {
          this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
            duration: 3000
          });

        })
      }



    });




    /*this.authService.guardadarUsuario(this.usuarioNuevo).subscribe((registro) => {
 
       Swal.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
     }, (error) => {
 
       this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
         duration: 3000
       });
 
     })*/
  }

}

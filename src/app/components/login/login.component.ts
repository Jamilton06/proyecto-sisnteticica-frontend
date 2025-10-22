import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/AuthService';
import { AuthUsuario } from 'src/app/modelo/AuthUsuario';
import { Usuario } from 'src/app/modelo/Usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponseToken } from 'src/app/Auth/ResponseToken';

import * as bcrypt from "bcryptjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authUser = {
    "username": '',
    "password": '',
  }
  constructor(private snack: MatSnackBar,private authService: AuthService, private router: Router) { }

  UserActivo: Usuario;
  bandera = "";
  user: any;
  roles: String;
  userActivo: undefined;

  ngOnInit(): void {
  }



  valiadrUsuario(authUser: AuthUsuario){
    console.log("validando usuario: ",authUser);

    this.authService.Login(this.authUser).subscribe((usuario: Usuario) => {

      console.log("usuario recibido consultado ", usuario);

      if (usuario == null) {
        this.snack.open('Usuario o Contraseña Incorrecta!!', 'Aceptar', {
          duration: 3000
        })
        return;
      } else {
        // Suponemos que `usuario.password` contiene el hash que devuelve el backend
  const enteredPassword: string = String(this.authUser.password);
  const hashedPassword: string = String(usuario.password);

        // Usar bcrypt.compare (Promise) para validar la contraseña
        bcrypt.compare(enteredPassword, hashedPassword)
          .then((match: boolean) => {
            if (match) {
              // Contraseña correcta: proceder al login
              console.log("Contraseña correcta, procediendo al login.");
              this.login(usuario);
            } else {
              // Contraseña incorrecta
              this.snack.open('Usuario o Contraseña Incorrecta!!', 'Aceptar', { duration: 3000 });
            }
          })
          .catch((err: any) => {
            console.error('Error al comparar contraseñas:', err);
            this.snack.open('Error al validar credenciales, inténtalo de nuevo.', 'Aceptar', { duration: 3000 });
          });

  
      }

    });



  }

  verificarUsuario() {

    if (this.authUser.username.trim() == '' || this.authUser.username.trim() == null) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000
      })
      return;
    }
    else if (this.authUser.password.trim() == '' || this.authUser.password.trim() == null) {
      this.snack.open('La contraseña es requerida !!', 'Aceptar', {
        duration: 3000
      })
      return;
    } else {

   this.valiadrUsuario(this.authUser);

}

/*
    this.authService.Login(this.authUser).subscribe((usuario: Usuario) => {
      console.log("usuario recibido consultado ", usuario);

      if (usuario == null) {
        this.snack.open('Usuario o Contraseña Incorrecta!!', 'Aceptar', {
          duration: 3000
        })
        return;
      } else {
      console.log("usuariovalido", usuario);
      }
    });*/
  }

  login(userActivo: Usuario) {
    // Acceder a las authorities del objeto userActivo
    const role = userActivo.authorities[0].authority;
    console.log("rol obtenido:", role);
    this.roles = role;

    if (this.roles === "NORMAL") {
      this.router.navigate(['/dashboard']);
    }
    if (this.roles === "ADMIN") {
      this.router.navigate(['/dashboard']);
    }
  }

}



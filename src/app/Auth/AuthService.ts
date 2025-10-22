import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthUsuario } from "../modelo/AuthUsuario";
import { Observable, Subject, window } from "rxjs";
import { Usuario } from "../modelo/Usuario";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }


    public loginStatusSubjec = new Subject<boolean>;
    private URL = "http://localhost:8080/auth";

    guardadarUsuario(Usuario: Usuario) {
        return this.http.post(`${this.URL}/register`, Usuario);
    }

    Login(authUser: AuthUsuario): any {

        console.log("esto es auth: ",authUser);
        return this.http.post(`${this.URL}` + "/login", authUser);
    }

    generarToken(authUser: AuthUsuario): any {
        return this.http.post(`${this.URL}` + "/generar-token", authUser);
    }

    traerUsuario(username: String): any {
        return this.http.get(`${this.URL}/${username}`);
    }


    public loginUser(token: any) {
        localStorage.setItem('token', token);
        return true;
    }

    public isLoggedIn() {
        let tokenStr = localStorage.getItem('token');
        if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
            return false;
        } else {
            return true;
        }
    }

    //cerranis sesion y eliminamos el token del localStorage
    public logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return true;
    }

    //obtenemos el token
    public getToken() {
        return localStorage.getItem('token');
    }

    public setUser(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    public getUser() {
        let userStr = localStorage.getItem('user');
        if (userStr != null) {
            return JSON.parse(userStr);
        } else {
            this.logout();
            return null;
        }
    }

    public getUserRole() {
        let user = this.getUser();
        return user.authorities[0].authority;
    }

    public getUsername() {
        let user = this.getUser();
        return user.name;
    }

}
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/AuthService';
import { ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef, private authService: AuthService, private router: Router) { }




  usernameActual = "";
  rolActual: String;
  ngOnInit(): void {

    this.usernameActual = this.authService.getUsername();
    this.rolActual = this.authService.getUserRole();

  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);


  }

}

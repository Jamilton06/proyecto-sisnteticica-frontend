import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingPagesDashboardModule } from './routing-pages-dashboard.module';

import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ListSinteticasComponent } from './components/list-sinteticas/list-sinteticas.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    ListSinteticasComponent,
    ListUsuariosComponent
  ],
  imports: [
    CommonModule,
    RoutingPagesDashboardModule,
    MatTableModule,
    FormsModule,
    MatIconModule



  ]
})
export class DashboardPagesModule { }

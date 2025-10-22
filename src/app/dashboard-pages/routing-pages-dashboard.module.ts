import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashComponent } from './components/home-dash/home-dash.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';
import { ListSinteticasComponent } from './components/list-sinteticas/list-sinteticas.component';
import { NormalGuardsService } from '../services/normal-guards.service';
import { AdminGuardService } from '../services/admin-guard.service';

const routes: Routes = [
  { path: 'dash-home', component: HomeDashComponent },
  { path: 'listar-usuarios', component: ListUsuariosComponent, canActivate: [AdminGuardService] },
  { path: 'listar-sinteticas', component: ListSinteticasComponent, canActivate: [NormalGuardsService] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RoutingPagesDashboardModule { }

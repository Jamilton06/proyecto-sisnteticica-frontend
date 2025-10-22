import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarSinteticaComponent } from './components/listar-sintetica/listar-sintetica.component';
import { RegistrarusuariosComponent } from './components/registrarusuarios/registrarusuarios.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'registrar', component: RegistrarusuariosComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'sinteticas', component: ListarSinteticaComponent, pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard-pages/dashboard-pages.module').then(m => m.DashboardPagesModule)
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

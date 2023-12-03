import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { StoreComponent } from './pages/store/store.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { HomeComponent } from './pages/home/home.component';

// const routes: Routes = [
  // {path: "", component: HomeComponent},
  // {path: "servicios", component: SevicesComponent},
  // {path: "agenda-una-cita", component: AgendaComponent},
  // {path: "tienda", component: StoreComponent},
  // {path: "talleres", component: TalleresComponent},
  // {path: "**", redirectTo: ""},
// ];

const routes: Routes = [
  /** Ruta a los componentes del Modulo Auth */
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module' ).then( module => module.AuthModule )
  },
  {path: "", component: HomeComponent},
  {path: "servicios", component: ServicesComponent},
  {
    path: 'dashboard',
    loadChildren: () => import( './dashboard/dashboard.module' ).then( module => module.DashboardModule )
  },
  // {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent},
  {path: "agenda-una-cita", component: AgendaComponent},
  {path: "tienda", component: StoreComponent},
  {path: "talleres", component: TalleresComponent},
  {path: "**", redirectTo: ""},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

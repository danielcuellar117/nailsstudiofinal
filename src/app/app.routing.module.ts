import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'dashboard',
    loadChildren: () => import( './dashboard/dashboard.module' ).then( module => module.DashboardModule )
  },
  // {path: "", component: HomeComponent},
  // {path: "servicios", component: SevicesComponent},
  // {path: "agenda-una-cita", component: AgendaComponent},
  // {path: "tienda", component: StoreComponent},
  // {path: "talleres", component: TalleresComponent},
  // {path: "**", redirectTo: ""},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

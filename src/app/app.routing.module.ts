import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SevicesComponent } from './pages/sevices/sevices.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { StoreComponent } from './pages/store/store.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "servicios", component: SevicesComponent},
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

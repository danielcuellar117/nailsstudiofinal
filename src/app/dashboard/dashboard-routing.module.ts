import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyAuthGuard } from '../guards/verify-auth.guard';
import { MainComponent } from './pages/main/main.component';
import { ServicesComponent } from './pages/services/services.component';
import { TallerDashComponent } from './pages/taller-dash/taller-dash.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'servicios', component: ServicesComponent },
      // { path: 'products', component: ProductsComponent },
      { path: 'talleres', component: TallerDashComponent },

      // { path: 'products/new', component: NewProductComponent },
      // { path: 'products/update/:id', component: UpdateProductComponent }
    ],
    canActivate: [ verifyAuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

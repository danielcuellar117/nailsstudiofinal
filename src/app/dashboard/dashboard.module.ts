import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { TalleresComponent } from '../pages/talleres/talleres.component';
import { TallerDashComponent } from './taller-dash/taller-dash.component';



@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    ServicesComponent,
    TallerDashComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

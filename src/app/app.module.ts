import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { SevicesComponent } from './pages/sevices/sevices.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SevicesComponent,
    TalleresComponent,
    AgendaComponent,
    StoreComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

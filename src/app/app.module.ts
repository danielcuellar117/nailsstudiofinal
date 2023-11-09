import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { SevicesComponent } from './pages/sevices/sevices.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { BannerTiendaComponent } from './components/banner-tienda/banner-tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    SevicesComponent,
    TalleresComponent,
    AgendaComponent,
    StoreComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    BannerTiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

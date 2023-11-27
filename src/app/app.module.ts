import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './pages/sevices/sevices.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { StoreComponent } from './pages/store/store.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { BannerTiendaComponent } from './components/banner-tienda/banner-tienda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoHomeComponent } from './components/info-home/info-home.component';
import { AsideComponent } from './components/aside/aside.component';
import { TallerComponent } from './components/taller/taller.component';
import { CardTallerComponent } from './components/card-taller/card-taller.component';
import { AuthModule } from './auth/auth.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './auth/pages/main/main.component';

@NgModule({
  declarations: [
    //pages
    AppComponent,
    ServicesComponent,
    TalleresComponent,
    AgendaComponent,
    StoreComponent,
    HomeComponent,
    TalleresComponent,
    // componenets
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    BannerTiendaComponent,
    InfoHomeComponent,
    AsideComponent,
    TallerComponent,
    CardTallerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

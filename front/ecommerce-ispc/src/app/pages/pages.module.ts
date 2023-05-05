import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { SectionComponent } from './home/section/section.component';
import { HeaderComponent } from './home/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import { GeneradorReciboDeSueldoComponent } from './generador-recibo-de-sueldo/generador-recibo-de-sueldo.component';

@NgModule({
  declarations: [
    SectionComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    DashboardComponent,
    SideBarComponent,
    PrivacidadComponent,
    ServiciosComponent,
    GeneradorReciboDeSueldoComponent,
  ],
  imports: [CommonModule],

  exports: [
    SectionComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    ServiciosComponent,
    GeneradorReciboDeSueldoComponent,
    SideBarComponent,
    DashboardComponent,
    PrivacidadComponent,
  ],
})
export class PagesModule {}

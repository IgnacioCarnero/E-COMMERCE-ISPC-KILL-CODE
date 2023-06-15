import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartModule } from '../add-to-cart/add-to-cart.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { SectionComponent } from './home/section/section.component';
import { HeaderComponent } from './home/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { RegistroEmpleadosComponent } from './dashboard/registro-empleados/registro-empleados.component';
import { TerminosComponent } from './terminos/terminos.component';
import { GeneradorReciboDeSueldoComponent } from './dashboard/generador-recibo-de-sueldo/generador-recibo-de-sueldo.component';
import { EmpleadosApiComponent } from './dashboard/empleados-api/empleados-api.component';
import {EmpleadosService} from '../services/empleados.service';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroEmpresaComponent } from './dashboard/registro-empresa/registro-empresa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SectionComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    DashboardComponent,
    PrivacidadComponent,
    ServiciosComponent,
    GeneradorReciboDeSueldoComponent,
    AyudaComponent,
    RegistroEmpleadosComponent,
    TerminosComponent,
    EmpleadosApiComponent,
    RegistroEmpresaComponent,
    ],
  imports: [CommonModule, AddToCartModule, AppRoutingModule, ReactiveFormsModule, SharedModule, FormsModule],

  exports: [
    SectionComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    ServiciosComponent,
    GeneradorReciboDeSueldoComponent,
    DashboardComponent,
    PrivacidadComponent,
    AyudaComponent,
    EmpleadosApiComponent

  ],
})
export class PagesModule {}

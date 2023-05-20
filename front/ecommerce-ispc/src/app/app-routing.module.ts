import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { RegistroEmpleadosComponent } from './pages/dashboard/registro-empleados/registro-empleados.component';
import { TerminosComponent } from './pages/terminos/terminos.component';

import { ServiciosComponent } from './pages/home/servicios/servicios.component';
import { GeneradorReciboDeSueldoComponent } from './pages/dashboard/generador-recibo-de-sueldo/generador-recibo-de-sueldo.component';
import { ContactComponent } from './pages/home/contact/contact.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'dashboard', component: DashboardComponent },

  {path: 'ayuda', component:AyudaComponent },
  { path: 'registro-empleados', component:RegistroEmpleadosComponent },
  { path: 'terminos', component:TerminosComponent },

  { path: 'servicios', component: ServiciosComponent },
  { path: 'generador de recibo de sueldo', component: GeneradorReciboDeSueldoComponent},
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

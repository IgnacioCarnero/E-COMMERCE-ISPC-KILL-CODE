import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth.guard'
import { Routes, RouterModule } from '@angular/router';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { RegistroEmpleadosComponent } from './pages/dashboard/registro-empleados/registro-empleados.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { GeneradorReciboDeSueldoComponent } from './pages/dashboard/generador-recibo-de-sueldo/generador-recibo-de-sueldo.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { RegistroEmpresaComponent } from './pages/dashboard/registro-empresa/registro-empresa.component';
import { NavComponent } from './shared/nav/nav.component';
import { ServiciosResolver } from './services/ServiciosResolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: 'registro-empleados', component: RegistroEmpleadosComponent, canActivate: [AuthGuard]  },
  { path: 'generador-recibo-de-sueldo', component: GeneradorReciboDeSueldoComponent,canActivate: [AuthGuard] },
  { path: 'registro-empresa', component: RegistroEmpresaComponent,canActivate: [AuthGuard] },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'servicios', component: ServiciosComponent, resolve: {servicios: ServiciosResolver }},
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
],

  exports: [RouterModule],
})
export class AppRoutingModule {}

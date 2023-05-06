import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { RegistroEmpleadosComponent } from './pages/dashboard/registro-empleados/registro-empleados.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'ayuda', component:AyudaComponent },
  { path: 'registro-empleados', component:RegistroEmpleadosComponent },
  { path: 'terminos', component:TerminosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

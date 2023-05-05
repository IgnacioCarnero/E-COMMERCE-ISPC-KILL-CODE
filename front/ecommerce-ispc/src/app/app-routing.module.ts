import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServiciosComponent } from './pages/home/servicios/servicios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'servicios', component: ServiciosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

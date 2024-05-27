import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Servicio } from './../pages/servicios/servicios.component';
import { ServiciosService } from './servicios.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosResolver implements Resolve<Servicio[]> {
  constructor(private serviciosService: ServiciosService) {}

  resolve(): Observable<Servicio[]> {
    return this.serviciosService.getServicios();
  }
}

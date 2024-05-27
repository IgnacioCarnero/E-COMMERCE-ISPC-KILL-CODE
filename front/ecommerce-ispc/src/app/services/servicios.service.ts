import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from './../pages/servicios/servicios.component';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  constructor(private http: HttpClient) {}

  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>('http://localhost:8000/api/servicios/', { withCredentials: true });
  }
}

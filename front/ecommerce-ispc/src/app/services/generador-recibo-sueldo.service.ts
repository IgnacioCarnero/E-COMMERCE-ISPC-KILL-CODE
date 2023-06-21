import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneradorReciboDeSueldoService {
  constructor(private http: HttpClient) {}

  enviarDatosADjango(datos: any): Observable<HttpResponse<any>> {
    const url = 'http://localhost:8000/api/crear-recibo/';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(url, datos, { headers, observe: 'response', withCredentials: true });
  }

  modificarDatosEnDjango(idRecibo: string, datos: any): Observable<HttpResponse<any>> {
    const url = `http://localhost:8000/api/modificar-recibo/${idRecibo}/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<any>(url, datos, { headers, observe: 'response', withCredentials: true });
  }

  eliminarDatosEnDjango(idRecibo: string): Observable<HttpResponse<any>> {
    const url = `http://localhost:8000/api/eliminar-recibo/${idRecibo}/`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(url, { headers, observe: 'response', withCredentials: true });
  }

  listarDatosEnDjango(): Observable<HttpResponse<any>> {
    const url = 'http://localhost:8000/api/listar-recibos/';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<any>(url, { headers, observe: 'response', withCredentials: true });
  }
}


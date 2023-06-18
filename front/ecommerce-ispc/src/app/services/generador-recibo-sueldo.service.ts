import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneradorReciboDeSueldoService {
  constructor(private http: HttpClient) {}

  enviarDatosADjango(datos: any) {
    const url = 'http://localhost:8000/api/crear-recibo/'; // Reemplaza con la URL de tu API de Django
    return this.http.post(url, datos);
  }

  modificarDatosEnDjango(idRecibo: string, datos: any) {
    const url = `http://localhost:8000/api/modificar-recibo/${idRecibo}/`; // Reemplaza con la URL de tu API de Django para actualizar registros
    return this.http.put(url, datos);
  }

  eliminarDatosEnDjango(idRecibo: string) {
    const url = `http://localhost:8000/api/eliminar-recibo/${idRecibo}/`; // Reemplaza con la URL de tu API de Django para eliminar registros
    return this.http.delete(url);
  }
}

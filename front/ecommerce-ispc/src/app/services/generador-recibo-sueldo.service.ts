import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneradorReciboSueldoService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  submitForm(formData: any) {
    const url = `${this.apiUrl}crear-recibo/`;
    return this.http.post(url, formData);
  }

  modifyForm(idRecibo: number, formData: any) {
    const url = `${this.apiUrl}modificar-recibo/${idRecibo}/`;
    return this.http.put(url, formData);
  }

  deleteForm(idRecibo: number) {
    const url = `${this.apiUrl}eliminar-recibo/${idRecibo}/`;
    return this.http.delete(url);
  }
}

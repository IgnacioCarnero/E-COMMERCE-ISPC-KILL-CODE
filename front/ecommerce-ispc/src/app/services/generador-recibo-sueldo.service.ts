import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneradorReciboSueldoService {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  submitForm(formData: any) {
    return this.http.post(this.apiUrl, formData)
  }
}

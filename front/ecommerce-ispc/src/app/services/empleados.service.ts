import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ClientesResponse} from '../interface'

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  //servicio HttpClient, me sirve para realizar las peticiones, get, post, put, etc
  constructor(private http : HttpClient) {   }

  cargarClientes() {
    const url = 'http://localhost:3000/data'

    return this.http.get<ClientesResponse>(url)
  }
}



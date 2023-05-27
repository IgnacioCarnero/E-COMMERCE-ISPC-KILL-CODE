import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Clientes, ClientesResponse} from '../interface'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private apiUrl =  'http://localhost:3000/data' //variable con la url de la api

  //servicio HttpClient, me sirve para realizar las peticiones, get, post, put, etc
  constructor(private http : HttpClient) {   }

  public getClientes() : Observable<ClientesResponse[]> {
    return this.http.get<ClientesResponse[]>(this.apiUrl) //metodo get para obtener los datos
  }

  // deleteClientes(clientes: Clientes | number ) : Observable<Clientes> {
  //   const id = typeof clientes === "number" ? clientes : clientes.id
  //   const url = `${this.apiUrl}/${id}`

  //   return this.http.delete<Clientes>(url, this.httpOpt)
  // }

}



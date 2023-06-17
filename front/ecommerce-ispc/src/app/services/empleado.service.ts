import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private registroEmpleadoSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  guardarRegistroEmpleado(datos: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/crear-empleado/', datos, { withCredentials: true })
      .pipe(
        map(response => {
          this.registroEmpleadoSubject.next(response);
          return response;
        })
      );
  }

  listarEmpleado(): Observable<any> {
    return this.http.get('http://localhost:8000/api/listar-empleados/', { withCredentials: true })
  }

  eliminarEmpleado(legajo: number): Observable<any> {
    const url = `http://localhost:8000/api/eliminar-empleado/${legajo}/`;
    return this.http.delete(url, { withCredentials: true });
  }

  modificarEmpleado(legajo: number, empleado: any): Observable<any> {
    const url = `http://localhost:8000/api/modificar-empleado/${legajo}/`;
    return this.http.put(url, empleado, { withCredentials: true });
  }
}
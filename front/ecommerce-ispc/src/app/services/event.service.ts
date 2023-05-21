import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private carritoActualizadoSubject = new Subject<void>();

  carritoActualizado$ = this.carritoActualizadoSubject.asObservable();

  actualizarCarrito() {
    this.carritoActualizadoSubject.next();
  }
}




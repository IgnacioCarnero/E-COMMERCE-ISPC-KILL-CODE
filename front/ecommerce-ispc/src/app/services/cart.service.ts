import { Injectable } from '@angular/core';
import { Servicio } from '../pages/servicios/servicios.component';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productosCarrito: Servicio[] = [];

  constructor(private http: HttpClient) {
    // ...
  }

  agregarAlCarrito(servicio: Servicio) {
    if (!this.servicioEstaEnCarrito(servicio)) {
      this.productosCarrito.push(servicio);
    }
  }

  getProductosCarrito() {
    return this.productosCarrito;
  }

  servicioEstaEnCarrito(servicio: Servicio): boolean {
    return this.productosCarrito.some((item) => item.nombreServicio === servicio.nombreServicio);
  }

  eliminarDelCarrito(servicio: Servicio) {
    const index = this.productosCarrito.findIndex((item) => item.nombreServicio === servicio.nombreServicio);
    if (index !== -1) {
      this.productosCarrito.splice(index, 1);
    }
  }

  hacerPedido(pedido: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/pedidos/', pedido, { withCredentials: true }).pipe(
      map((response) => {
        // Se utiliza esta estructura para en un futuro poder manejar la respuesta y transformarla
        // con los metodos pipe y map
        return response;
      })
    );
  }

  listarPedido(): Observable<any> {
    return this.http.get('http://localhost:8000/api/pedidos/', { withCredentials: true });
  }
}


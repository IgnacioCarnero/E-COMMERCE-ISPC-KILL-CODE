import { Injectable } from '@angular/core';
import { Servicio } from '../pages/home/servicios/servicios.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productosCarrito: Servicio[] = [];

  agregarAlCarrito(servicio: Servicio) {
    if (!this.servicioEstaEnCarrito(servicio)) {
      this.productosCarrito.push(servicio);
  }
  }
  getProductosCarrito() {
    return this.productosCarrito;
  }
  servicioEstaEnCarrito(servicio: Servicio): boolean {
    return this.productosCarrito.some(item => item.nombre === servicio.nombre);
  }
  eliminarDelCarrito(servicio: Servicio) {
    const index = this.productosCarrito.findIndex(item => item.nombre === servicio.nombre);
    if (index !== -1) {
      this.productosCarrito.splice(index, 1);
    }
  }
}



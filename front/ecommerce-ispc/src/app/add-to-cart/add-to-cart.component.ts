import { Component } from '@angular/core';
import { Servicio } from '../pages/servicios/servicios.component';
import { CartService } from '../services/cart.service';
import { EventService } from '../services/event.service';



@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  productosCarrito: Servicio[] = [];
  subtotal: number = 0;

  constructor(private cartService: CartService, private eventService: EventService) {
    this.productosCarrito = this.cartService.getProductosCarrito();
    this.calcularSubtotal();
  }

  eliminarDelCarrito(servicio: Servicio) {
    this.cartService.eliminarDelCarrito(servicio);
    servicio.isInCart = false;
    this.calcularSubtotal();
    this.eventService.actualizarCarrito();
  }

  calcularSubtotal() {
    this.subtotal = this.productosCarrito.reduce((total, servicio) => total + servicio.precio, 0);
    return this.subtotal;
  }
  
}

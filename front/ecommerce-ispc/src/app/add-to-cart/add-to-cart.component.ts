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

  constructor(private cartService: CartService, private eventService: EventService) {
    this.productosCarrito = this.cartService.getProductosCarrito();
  }
  eliminarDelCarrito(servicio: Servicio) {
    this.cartService.eliminarDelCarrito(servicio);
    servicio.isInCart = false;
    this.eventService.actualizarCarrito();
  }
}

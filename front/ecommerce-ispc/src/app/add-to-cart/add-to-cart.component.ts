import { Component } from '@angular/core';
import { Servicio } from '../pages/home/servicios/servicios.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  productosCarrito: Servicio[] = [];

  constructor(private cartService: CartService) {
    this.productosCarrito = this.cartService.getProductosCarrito();
  }
  eliminarDelCarrito(servicio: Servicio) {
    this.cartService.eliminarDelCarrito(servicio);
  }
}

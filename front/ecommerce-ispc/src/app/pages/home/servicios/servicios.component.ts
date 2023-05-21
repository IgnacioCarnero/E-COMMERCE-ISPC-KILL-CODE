import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  Personal: Servicio = new Servicio('Personal', '$20000');

  constructor(private cartService: CartService) { }

  agregarAlCarrito(servicio: Servicio) {
    this.cartService.agregarAlCarrito(servicio);
}
}
export class Servicio {
  nombre: string;
  precio: string;
  constructor(nombre: string, precio: string){
    this.nombre = nombre;
    this.precio = precio;
  }
}

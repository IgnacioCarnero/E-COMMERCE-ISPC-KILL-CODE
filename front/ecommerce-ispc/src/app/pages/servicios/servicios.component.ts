import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';
import { Subscription, flatMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements AfterViewInit, OnDestroy{
  Personal: Servicio = new Servicio('Personal', 20000);
  PyME: Servicio = new Servicio('PyME', 60000);
  PremiumPyME: Servicio = new Servicio('PremiumPyME', 100000);
  isLoggedIn: boolean = false;
  
  private carritoActualizadoSubscription!: Subscription;
  constructor(private cartService: CartService, private eventService: EventService, public authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.getIsAuthenticated();
    console.log(this.isLoggedIn);
  }

  ngAfterViewInit() {
    this.cambioDeBoton(this.Personal);
    this.cambioDeBoton(this.PyME);
    this.cambioDeBoton(this.PremiumPyME);
    this.carritoActualizadoSubscription = this.eventService.carritoActualizado$.subscribe(() => {
      this.cambioDeBoton(this.Personal);
      this.cambioDeBoton(this.PyME);
      this.cambioDeBoton(this.PremiumPyME);
    });
  }

  ngOnDestroy() {
    this.carritoActualizadoSubscription.unsubscribe();
  }

  agregarAlCarrito(servicio: Servicio) {
    this.cartService.agregarAlCarrito(servicio);
    servicio.isInCart = true;
  }

  cambioDeBoton(servicio: Servicio): { class: string, text: string } {
    if (servicio.isInCart) {
      return { class: 'btn btn-success', text: 'Agregado al carrito' };
    } else {
      return { class: 'btn btn-primary', text: 'Agregar licencia' };
    }
  }

  getIsAuthenticated(): boolean {
    return this.authService.getIsAuthenticated();
  }
  
}
export class Servicio {
  nombre: string;
  precio: number;
  isInCart: boolean;
  
  constructor(nombre: string, precio: number){
    this.nombre = nombre;
    this.precio = precio;
    this.isInCart = false;
  }
}

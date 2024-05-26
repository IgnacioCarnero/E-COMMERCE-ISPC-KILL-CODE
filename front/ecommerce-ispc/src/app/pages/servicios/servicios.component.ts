import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, OnDestroy {
  servicios: Servicio[] = [];
  servicioPersonal!: Servicio;
  servicioPyME!: Servicio;
  servicioPremiumPyME!: Servicio;
  isLoggedIn: boolean = false;

  private carritoActualizadoSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private cartService: CartService, private eventService: EventService, public authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.getIsAuthenticated();
    console.log('Usuario autenticado:', this.isLoggedIn);
    
    // Obtener los servicios del servidor Django
    this.route.data.subscribe({
      next: (data) => {
        console.log('Servicios obtenidos:', data);
        if (data && data['servicios']) {
          this.servicios = data['servicios'] as Servicio[];
          this.servicioPersonal = this.servicios[0];
          this.servicioPyME = this.servicios[1];
          this.servicioPremiumPyME = this.servicios[2];
          console.log('Servicio Personal:', this.servicioPersonal);
          console.log('Servicio PyME:', this.servicioPyME);
          console.log('Servicio Premium PyME:', this.servicioPremiumPyME);
        } else {
          console.error('El objeto de datos no contiene la propiedad "servicios".');
        }
      // Suscribirse a cambios en el carrito y actualizar los botones cuando ocurran estos cambios
    this.carritoActualizadoSubscription = this.eventService.carritoActualizado$.subscribe(() => {
      this.cambioDeBoton(this.servicioPersonal);
      this.cambioDeBoton(this.servicioPyME);
      this.cambioDeBoton(this.servicioPremiumPyME);
    });},
    error: (error) => {
      console.error('Error al obtener los servicios:', error);
    }
  });}

  ngOnDestroy() {
    if (this.carritoActualizadoSubscription) {
      this.carritoActualizadoSubscription.unsubscribe();
    }
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
  nombreServicio: string;
  valor: number;
  isInCart: boolean;
  detalle: String;
  idServicio: number;
  token: string;

  constructor(nombreServicio: string, valor: number, detalle: String, idServicio: number, token: string) {
    this.nombreServicio = nombreServicio;
    this.valor = valor;
    this.isInCart = false;
    this.detalle = detalle;
    this.idServicio = idServicio;
    this.token = token;
  }
}

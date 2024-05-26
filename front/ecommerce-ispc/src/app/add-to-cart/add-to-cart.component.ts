import { Component } from '@angular/core';
import { Servicio } from '../pages/servicios/servicios.component';
import { CartService } from '../services/cart.service';
import { EventService } from '../services/event.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Decimal from 'decimal.js';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  productosCarrito: Servicio[] = [];
  subtotal: Decimal = new Decimal(0);
  total: Decimal = new Decimal(0);
  numero_tarjetaValido = true;
  nombre_tarjetaValido = true;
  vencimientoValido = true;
  cvvValido = true;
  submitted = false; // Variable para control de envio de formulario
  errorMessage: string | null = null; // Variable para almacenar el mensaje de error
  successMessage: string | null = null; // Variable para almacenar el mensaje de éxito
  listaPedidos: any[] = []; // varieble para traer el registro de pedidos
  mostrarTabla: boolean = false; // variable para mostrar tabla en caso de seleccionar el boton
  fechaHoraActual: Date;
  userId: number = 0;
  errorMessageNombreTarjeta: string | null = null;
  errorMessageNumeroTarjeta: string | null = null;;
  errorMessageCvvTarjeta: string | null = null;;
  errorMessageVencimientoTarjeta: string | null = null;;


  constructor(private router: Router, private cartService: CartService, private eventService: EventService, 
    private formBuilder: FormBuilder, private login: AuthService) {
    this.productosCarrito = this.cartService.getProductosCarrito();
    this.calcularSubtotal();
    this.fechaHoraActual = new Date();
    this.login.userId$.subscribe(userId => {
    if (userId) {
      this.userId = userId;
    }
  });
  }
  // reglas para validar los campos del formulario
  formulario = new FormGroup({
    nombre_tarjeta: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    numero_tarjeta: new FormControl('', [Validators.required, Validators.minLength(19)]),
    vencimiento: new FormControl('', [Validators.required]),
    Cvv: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });


  get nombreTarjeta() {
    return this.formulario.get('nombre_tarjeta') as FormControl;
  }
  get numeroTarjeta() {
    return this.formulario.get('numero_tarjeta') as FormControl;
  }
  get cvvTarjeta() {
    return this.formulario.get('Cvv') as FormControl;
  }
  get vencimientoTarjeta() {
    return this.formulario.get('vencimiento') as FormControl;
  }

  eliminarDelCarrito(servicio: Servicio) {
    this.cartService.eliminarDelCarrito(servicio);
    servicio.isInCart = false;
    this.calcularSubtotal();
    this.eventService.actualizarCarrito();
  }

  calcularSubtotal() {
    this.subtotal = this.productosCarrito.reduce(
      (total, servicio) => total.plus(servicio.valor),
      new Decimal(0)
    );
    return this.subtotal;
  }

  calcularTotal() {
    this.total = this.subtotal.times(1.21);
    return this.total;
  }

  comprar() {
  // Lógica para el proceso de compra
  this.submitted = true;
  // validamos los campos del formulario
  if (this.formulario) {
    if (this.nombreTarjeta.invalid && this.nombreTarjeta.touched) {
      this.nombre_tarjetaValido = false;
      console.log('El campo nombre_tarjeta tiene errores de validación');
      console.log(this.nombreTarjeta.errors);
      this.errorMessageNombreTarjeta = 'El campo nombre_tarjeta tiene errores de validación';
    } else {
      this.nombre_tarjetaValido = true;
    }

    if (this.numeroTarjeta.invalid && this.numeroTarjeta.touched) {
      this.numero_tarjetaValido = false;
      console.log('El campo numero_tarjeta tiene errores de validación');
      console.log(this.numeroTarjeta.errors);
      this.errorMessageNumeroTarjeta = 'El campo numero_tarjeta tiene errores de validación';
    } else {
      this.numero_tarjetaValido = true;
    }

    if (this.cvvTarjeta.invalid && this.cvvTarjeta.touched) {
      this.cvvValido = false;
      console.log('El campo Cvv tiene errores de validación');
      console.log(this.cvvTarjeta.errors);
      this.errorMessageCvvTarjeta = 'El campo Cvv tiene errores de validación';
    } else {
      this.cvvValido = true;
    }

    if (this.vencimientoTarjeta.invalid && this.vencimientoTarjeta.touched) {
      this.vencimientoValido = false;
      console.log('El campo vencimiento tiene errores de validación');
      console.log(this.vencimientoTarjeta.errors);
      this.errorMessageVencimientoTarjeta = 'El campo vencimiento tiene errores de validación';
    } else {
      this.vencimientoValido = true;
    }

    if (this.formulario.invalid) {
      console.log('El formulario tiene errores de validación');
      console.log(this.formulario.errors);
      this.errorMessage = 'El formulario tiene errores de validación';
      setTimeout(() => {
        this.errorMessage = ''; // Opcional: para limpiar el mensaje después de 5 segundos
      }, 5000);
      return;
    }
  }

  // armamos el objeto pedido que enviaremos en la request
  console.log(this.userId);
  const detalles = this.productosCarrito.map(servicio => servicio.detalle);
  const ids = this.productosCarrito.map(servicio => servicio.idServicio);
  const totalDecimal = new Decimal(this.total);
  const cvvNumber = Number(this.cvvTarjeta.value);
  const pedido = {
    fechaHora: this.fechaHoraActual.toISOString(),
    nombre_tarjeta: this.nombreTarjeta.value,
    numero_tarjeta: this.numeroTarjeta.value,
    vencimiento: this.vencimientoTarjeta.value,
    Cvv: cvvNumber,
    detalle: detalles[0],
    Servicio: ids[0],
    CustomUser: this.userId,
    valorTotal: totalDecimal.toNumber(),
  };
  // llamamos al metodo hacerPedido que es el que hace la solicitud http
  // pasamos el objeto pedido y nos suscribimos al observable que devuelve el metodo hacerPedido
    this.cartService.hacerPedido(pedido)
    .subscribe({
      next: (response) => {
        // Eliminar el servicio del carrito
        this.eliminarDelCarrito(this.productosCarrito[0]);
        this.resetForm();
        this.successMessage = 'El pedido se realizó correctamente.';
        // despues del mensaje de respuesta, reseteamos el form y borramos el mensaje
        setTimeout(() => {
          this.resetForm();
          this.successMessage = ''; // Opcional: para limpiar el mensaje después de 5 segundos
        }, 5000);
      },
      error: (error) => {
        this.errorMessage = 'Error al realizar el pedido.';
        setTimeout(() => {
          this.errorMessage = ''; // Opcional: para limpiar el mensaje después de 5 segundos
        }, 5000);
      }
    });
  }

  resetForm(): void {
    this.formulario.reset();
    this.submitted = false;
    this.successMessage = null;
    this.errorMessage = null;
  }

  verPedido(): void {
    this.cartService.listarPedido().subscribe({
      next: (response: any[]) => {
        // Aquí puedes manejar los datos recibidos, por ejemplo, asignarlos a una variable
        console.log(this.listaPedidos = response);
        this.mostrarTabla = true;
      },
      error: (error) => {
        // Aquí puedes manejar el error en caso de que ocurra
        console.error(error);
      }
    });
  }
}

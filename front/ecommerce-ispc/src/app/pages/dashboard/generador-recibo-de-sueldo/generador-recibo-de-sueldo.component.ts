import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-generador-recibo-de-sueldo',
  templateUrl: './generador-recibo-de-sueldo.component.html',
  styleUrls: ['./generador-recibo-de-sueldo.component.css']
})
export class GeneradorReciboDeSueldoComponent implements OnInit {

  rsForm: FormGroup;
  isFormSubmitted: boolean = false;


  constructor() {
    this.rsForm = new FormGroup({
      nombreDeEmpresa: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      dirección: new FormControl('', [Validators.required, Validators.minLength(17), Validators.maxLength(25)]),
      cuidad: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      códigoPostal: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      país: new FormControl('Argentina', Validators.required),
      provincia: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      primerNombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cuilDelEmpleado: new FormControl('', [Validators.required, Validators.min(1000000000000), Validators.max(9999999999999)]),
      dirección_two: new FormControl('', [Validators.required, Validators.minLength(17), Validators.maxLength(25)]),
      cuidad_two: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      códigoPostal_two: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      país_two: new FormControl('Argentina', Validators.required),
      provincia_two: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      dni: new FormControl('', [Validators.required, Validators.min(10000000), Validators.max(99999999)]),
      díaDelPago: new FormControl('', Validators.required),
      finDelPago: new FormControl('', Validators.required),
      cantidadDePagos: new FormControl('En todas 2 Semanas', Validators.required),
      ingresoAnual: new FormControl('', [Validators.required, Validators.min(100), Validators.max(1000000)]),
      causaPorLaRetención: new FormControl('', [Validators.required, Validators.maxLength(35)]),
      cantidadDeRetenciones: new FormControl('', [Validators.required, Validators.min(100), Validators.max(1000000)])
    });
  }

  onSubmit() {
    if (this.rsForm.valid) {
      this.isFormSubmitted == true;
    }
  }

  ngOnInit(): void {
    // Código adicional que necesites ejecutar al inicializar el componente
  }

}



import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css'],
})

    export class RegistroEmpleadosComponent {
      formu = new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
        dni: new FormControl('', Validators.required),
        dateone: new FormControl('', Validators.required),
        legajo: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        direccion: new FormControl('', [Validators.required, Validators.minLength(3)]),
        numero: new FormControl('', [Validators.required, Validators.minLength(3)]),
        provincia: new FormControl('', [Validators.required, Validators.minLength(3)]),
        cargo: new FormControl('', [Validators.required, Validators.minLength(3)]),
        categoria: new FormControl('', [Validators.required, Validators.minLength(3)]),
        obra: new FormControl('', [Validators.required, Validators.minLength(3)]),
        art: new FormControl('', [Validators.required, Validators.minLength(3)]),
      });
      get nombre() {
        return this.formu.get('nombre');
      }

      get apellido() {
        return this.formu.get('apellido');
      }

      get dni() {
        return this.formu.get('dni');
      }

      get dateone() {
        return this.formu.get('dateone');
      }
      get legajo() {
        return this.formu.get('legajo');
      }
      get date() {
        return this.formu.get('date');
      }

      get email() {
        return this.formu.get('email');
      }

      get direccion() {
        return this.formu.get('direccion');
      }

      get numero() {
        return this.formu.get('numero');
      }

      get provincia() {
        return this.formu.get('provincia');
      }

      get cargo() {
        return this.formu.get('cargo');
      }

      get categoria() {
        return this.formu.get('categoria');
      }

      get obra() {
        return this.formu.get('obra');
      }

      get art() {
        return this.formu.get('art');
      }

      guardarRegistro() {
        const valores = this.formu.value;
        console.log(valores);
        this.formu.reset();
      }
    }




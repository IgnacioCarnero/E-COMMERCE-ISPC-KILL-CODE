import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css'],
})

    export class RegistroEmpleadosComponent {
      formu = new FormGroup({
        legajo: new FormControl('', [Validators.required,Validators.pattern(`^[0-9A-Za-z]+$`),]),
        nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        apellido: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        calle: new FormControl('', [Validators.required, Validators.minLength(3)]),
        numero: new FormControl('', [Validators.required, Validators.minLength(3)]),
        provincia: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        email: new FormControl('', [Validators.required,Validators.pattern(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`),]),
        telefono: new FormControl('', [Validators.required,Validators.pattern(`^[0-9A-Za-z]+$`),]),
        cargo: new FormControl('', [Validators.required, Validators.minLength(3)]),
        categoria: new FormControl('', [Validators.required, Validators.minLength(3)]),
        fecha_ingreso: new FormControl('', [Validators.required]),

        // fecha_ingreso: new FormControl('', [Validators.required,Validators.pattern(`^(19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1])$`),]),
        fecha_nacimiento: new FormControl('', [Validators.required]),
        cuil_empleado: new FormControl('', [Validators.required,Validators.pattern(`^[0-9A-Za-z]+$`),]),
        obra_social: new FormControl('', [Validators.required, Validators.minLength(3)]),
        art: new FormControl('', [Validators.required, Validators.minLength(3)]),
        });

        mostrarDatos = false;

        get legajo() {
          return this.formu.get('legajo')as FormControl;
        }

      get nombre() {
        return this.formu.get('nombre') as FormControl;
      }

      get apellido() {
        return this.formu.get('apellido')as FormControl;
      }
/*       Se comenta linea de codigo no requerida
      get dni() {
        return this.formu.get('dni')as FormControl;
      } */

      get fecha_ingreso() {
        return this.formu.get('fecha_ingreso')as FormControl;
      }

      get fecha_nacimiento() {
        return this.formu.get('fecha_nacimiento')as FormControl;
      }

      get email() {
        return this.formu.get('email')as FormControl;
      }

      get telefono() {
        return this.formu.get('telefono')as FormControl;
      }

      get calle() {
        return this.formu.get('calle')as FormControl;
      }

      get numero() {
        return this.formu.get('numero')as FormControl;
      }

      get provincia() {
        return this.formu.get('provincia')as FormControl;
      }

      get cargo() {
        return this.formu.get('cargo')as FormControl;
      }

      get categoria() {
        return this.formu.get('categoria')as FormControl;
      }

      get cuil_empleado() {
        return this.formu.get('cuil_empleado')as FormControl;
      }
      get obra_social() {
        return this.formu.get('obra_social')as FormControl;
      }

      get art() {
        return this.formu.get('art')as FormControl;
      }

/*
        guardarRegistro() {
        if (this.formu.invalid) {
          console.log('El formulario tiene errores de validación');
          console.log(this.formu.errors);
          console.log(this.nombre?.errors);

          return;
        }
        const valores = this.formu.value;
        console.log(valores);
        this.formu.reset();
      }
      resetFormulario() {
        this.formu.reset();
      }
    } */


   /*  guardarRegistro() {
      if (this.formu.invalid) {
        console.log('El formulario tiene errores de validación');
        console.log(this.formu.errors);
        console.log(this.nombre?.errors);
 */


legajoValido = true;
nombreValido = true;
apellidoValido = true;
calleValido = true;
numeroValido = true;
provinciaValido = true;
emailValido = true;
telefonoValido = true;
cargoValido = true;
categoriaValido = true;
fechaIngresoValido = true;
fechaNacimientoValido = true;
obraSocialValido = true;
artValido = true;

        guardarRegistro() {
          const valores = this.formu.value;

          // Validar campo legajo
          if (this.formu.controls.legajo.invalid && this.formu.controls.legajo.touched) {
            this.legajoValido = false;
          } else {
            this.legajoValido = true;
          }

          // Validar campo nombre
          if (this.formu.controls.nombre.invalid && this.formu.controls.nombre.touched) {
            this.nombreValido = false;
          } else {
            this.nombreValido = true;
          }

          // Validar campo apellido
          if (this.formu.controls.apellido.invalid && this.formu.controls.apellido.touched) {
            this.apellidoValido = false;
          } else {
            this.apellidoValido = true;
          }

          // Validar campo calle
          if (this.formu.controls.calle.invalid && this.formu.controls.calle.touched) {
            this.calleValido = false;
          } else {
            this.calleValido = true;
          }

          // Validar campo numero
          if (this.formu.controls.numero.invalid && this.formu.controls.numero.touched) {
            this.numeroValido = false;
          } else {
            this.numeroValido = true;
          }

          // Validar campo provincia
          if (this.formu.controls.provincia.invalid && this.formu.controls.provincia.touched) {
            this.provinciaValido = false;
          } else {
            this.provinciaValido = true;
          }

          // Validar campo email
          if (this.formu.controls.email.invalid && this.formu.controls.email.touched) {
            this.emailValido = false;
          } else {
            this.emailValido = true;
          }

          // Validar campo telefono
          if (this.formu.controls.telefono.invalid && this.formu.controls.telefono.touched) {
            this.telefonoValido = false;
          } else {
            this.telefonoValido = true;
          }

          // Validar campo cargo
          if (this.formu.controls.cargo.invalid && this.formu.controls.cargo.touched) {
            this.cargoValido = false;
          } else {
            this.cargoValido = true;
          }

          // Validar campo categoria
          if (this.formu.controls.categoria.invalid && this.formu.controls.categoria.touched) {
            this.categoriaValido = false;
          } else {
            this.categoriaValido = true;
          }

          // Validar campo fecha_ingreso
          if (this.formu.controls.fecha_ingreso.invalid && this.formu.controls.fecha_ingreso.touched) {
            this.fechaIngresoValido = false;
          } else {
            this.fechaIngresoValido = true;
          }

          // Validar campo fecha_nacimiento
          if (this.formu.controls.fecha_nacimiento.invalid && this.formu.controls.fecha_nacimiento.touched) {
            this.fechaNacimientoValido = false;
          } else {
            this.fechaNacimientoValido = true;
          }


          // Validar campo obra_social
          if (this.formu.controls.obra_social.invalid && this.formu.controls.obra_social.touched) {
            this.obraSocialValido = false;
          } else {
            this.obraSocialValido = true;
          }

        }







/*
        return;
      }
      const valores = this.formu.value;
      console.log(valores);
      this.formu.reset();
    } */

    verRegistro() {
      const valores = this.formu.value;
    console.log(valores);
    this.mostrarDatos = true;
    }

    modificarRegistro() {
      if (this.formu.invalid) {
        console.log('El formulario tiene errores de validación');
        console.log(this.formu.errors);
        console.log(this.nombre?.errors);

        return;
      }
      const valores = this.formu.value;
      console.log(valores);
      // Lógica para modificar el registro, por ejemplo, enviar una solicitud de actualización al servidor.
    }

      resetFormulario() {
      this.formu.reset();
    }




  }

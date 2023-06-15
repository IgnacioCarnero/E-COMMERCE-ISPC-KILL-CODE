import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../../services/empleado.service';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css'],
})

export class RegistroEmpleadosComponent {

  constructor(private formBuilder: FormBuilder, private empleadoService: EmpleadoService) {
    // ...
  }

  submitted = false
  errorMessage: string | null = null; // Variable para almacenar el mensaje de error
  successMessage: string | null = null; // Variable para almacenar el mensaje de éxito
  respuesta: string = '';
  listaEmpleados: any[] = [];
  mostrarTabla: boolean = false;
  empleadoSeleccionado: any; // Variable para almacenar el empleado seleccionado

  formu = new FormGroup({
    legajo: new FormControl('', [Validators.required, Validators.pattern(`^[0-9A-Za-z]+$`),]),
    nombre: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    apellido: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    calle: new FormControl('', [Validators.required, Validators.minLength(3)]),
    casa_piso_numero: new FormControl('', [Validators.required, Validators.minLength(3)]),
    provincia: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`),]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(`^[0-9A-Za-z]+$`),]),
    cargo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    categoria: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fecha_ingreso: new FormControl('', [Validators.required]),
    fecha_nacimiento: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cuil_empleado: new FormControl('', [Validators.required, Validators.pattern(`^[0-9A-Za-z]+$`),]),
    obra_social: new FormControl('', [Validators.required, Validators.minLength(1)]),
    art: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  get legajo() {
    return this.formu.get('legajo') as FormControl;
  }

  get nombre() {
    return this.formu.get('nombre') as FormControl;
  }

  get apellido() {
    return this.formu.get('apellido') as FormControl;
  }

  get fecha_ingreso() {
    return this.formu.get('fecha_ingreso') as FormControl;
  }

  get fecha_nacimiento() {
    return this.formu.get('fecha_nacimiento') as FormControl;
  }

  get email() {
    return this.formu.get('email') as FormControl;
  }

  get telefono() {
    return this.formu.get('telefono')as FormControl;
  }

  get calle() {
    return this.formu.get('calle') as FormControl;
  }

  get numero() {
    return this.formu.get('casa_piso_numero') as FormControl;
  }

  get provincia() {
    return this.formu.get('provincia') as FormControl;
  }

  get cargo() {
    return this.formu.get('cargo') as FormControl;
  }

  get categoria() {
    return this.formu.get('categoria') as FormControl;
  }

  get ciudad() {
    return this.formu.get('ciudad') as FormControl;
  }

  get cuil_empleado() {
    return this.formu.get('cuil_empleado') as FormControl;
  }
  get obra_social() {
    return this.formu.get('obra_social') as FormControl;
  }

  get art() {
    return this.formu.get('art') as FormControl;
  }

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


  submitData(): void {
    this.submitted = true;
    if (this.formu.invalid) {
      console.log('El formulario tiene errores de validación');
      console.log(this.formu.errors);
      console.log(this.nombre?.errors);
      this.errorMessage = 'El formulario tiene errores de validación';
      return;
    }

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
          if (this.formu.controls.casa_piso_numero.invalid && this.formu.controls.casa_piso_numero.touched) {
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



    this.empleadoService.guardarRegistroEmpleado(valores)
    .subscribe({
      next: () => {
        this.resetForm();
        this.successMessage = 'El registro del empleado se guardó correctamente.';
        setTimeout(this.resetForm.bind(this), 5000);
      },
      error: (error) => {
        this.errorMessage = 'Error al guardar el registro del empleado.';
      }
    });
  }
  resetForm(): void {
    this.formu.reset();
    this.submitted = false;
    this.successMessage = null;
    this.errorMessage = null;
  }

  verEmpleado(): void {
    this.empleadoService.listarEmpleado().subscribe({
      next: (response: any[]) => {
        // Aquí puedes manejar los datos recibidos, por ejemplo, asignarlos a una variable
        console.log(this.listaEmpleados = response);
        this.mostrarTabla = true;
      },
      error: (error) => {
        // Aquí puedes manejar el error en caso de que ocurra
        console.error(error);
      }
    });
  }

  cargarEmpleadoSeleccionado() {
    if (this.empleadoSeleccionado) {
      this.formu.controls.legajo.setValue(this.empleadoSeleccionado.legajo);
      this.formu.controls.nombre.setValue(this.empleadoSeleccionado.nombre);
      this.formu.controls.apellido.setValue(this.empleadoSeleccionado.apellido);
      this.formu.controls.calle.setValue(this.empleadoSeleccionado.calle);
      this.formu.controls.casa_piso_numero.setValue(this.empleadoSeleccionado.casa_piso_numero);
      this.formu.controls.provincia.setValue(this.empleadoSeleccionado.provincia);
      this.formu.controls.email.setValue(this.empleadoSeleccionado.email);
      this.formu.controls.telefono.setValue(this.empleadoSeleccionado.telefono);
      this.formu.controls.cargo.setValue(this.empleadoSeleccionado.cargo);
      this.formu.controls.categoria.setValue(this.empleadoSeleccionado.categoria);
      this.formu.controls.ciudad.setValue(this.empleadoSeleccionado.ciudad);
      this.formu.controls.fecha_ingreso.setValue(this.empleadoSeleccionado.fecha_ingreso);
      this.formu.controls.fecha_nacimiento.setValue(this.empleadoSeleccionado.fecha_nacimiento);
      this.formu.controls.cuil_empleado.setValue(this.empleadoSeleccionado.cuil_empleado);
      this.formu.controls.obra_social.setValue(this.empleadoSeleccionado.obra_social);
      this.formu.controls.art.setValue(this.empleadoSeleccionado.art);
    }
  }

  seleccionarEmpleado(empleado: any): void {
    this.empleadoSeleccionado = empleado; // Guardar el empleado seleccionado en la variable
    this.cargarEmpleadoSeleccionado(); // Cargar el empleado seleccionado en los campos del formulario
  }

  eliminarEmpleadoSeleccionado(): void {
    if (this.empleadoSeleccionado) {
      const legajo = this.empleadoSeleccionado.legajo; // Obtener el legajo del empleado seleccionado
      this.eliminarEmpleado(legajo); // Llamar al método eliminarEmpleado con el legajo del empleado seleccionado
    } else {
      console.error('No se ha seleccionado ningún empleado');
    }
  }

  eliminarEmpleado(legajo: number): void {
    this.empleadoService.eliminarEmpleado(legajo).subscribe({
      next: () => {
        // Operación de eliminación exitosa, realizar acciones adicionales si es necesario
        console.log('Empleado eliminado correctamente');
        // Aquí puedes realizar acciones adicionales después de la eliminación
        // Por ejemplo, actualizar la lista de empleados llamando al método verEmpleado()
        this.resetForm();
        this.verEmpleado();
        this.successMessage = 'El empleado se eliminó correctamente.';
        setTimeout(this.resetForm.bind(this), 5000); // Muestra confirmación durante 5 segundos
      },
      error: (error) => {
        // Manejar el error en caso de que ocurra
        console.error('Error al eliminar empleado:', error);
        this.errorMessage = 'Error al eliminar el registro del empleado.';
      }
    });
  }

  modificarEmpleado() {
    const empleadoModificado = {
      legajo: this.formu.controls.legajo.value,
      nombre: this.formu.controls.nombre.value,
      apellido: this.formu.controls.apellido.value,
      calle: this.formu.controls.calle.value,
      casa_piso_numero: this.formu.controls.casa_piso_numero.value,
      provincia: this.formu.controls.provincia.value,
      email: this.formu.controls.email.value,
      telefono: this.formu.controls.telefono.value,
      cargo: this.formu.controls.cargo.value,
      categoria: this.formu.controls.categoria.value,
      ciudad: this.formu.controls.ciudad.value,
      fecha_ingreso: this.formu.controls.fecha_ingreso.value,
      fecha_nacimiento: this.formu.controls.fecha_nacimiento.value,
      cuil_empleado: this.formu.controls.cuil_empleado.value,
      obra_social: this.formu.controls.obra_social.value,
      art: this.formu.controls.art.value,
    };

    this.empleadoService.modificarEmpleado(this.empleadoSeleccionado.legajo, empleadoModificado)
      .subscribe({
        next: (response) => {
          // Manejar la respuesta del servidor
          console.log(response);
          // Puedes mostrar un mensaje de éxito, actualizar la lista de empleados.
          this.resetForm();
          this.verEmpleado();
          this.successMessage = 'El empleado se modifico correctamente.';
          setTimeout(this.resetForm.bind(this), 5000);
        },
        error: (error) => {
          // Manejar el error
          console.error(error);
          // Puedes mostrar un mensaje de error o realizar alguna acción adicional
          this.errorMessage = 'Error al modificar el registro del empleado.';
        }
    });
  }


}


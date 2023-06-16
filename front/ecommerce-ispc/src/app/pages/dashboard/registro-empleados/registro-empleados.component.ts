import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../../services/empledo.service';

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
    fecha_ingreso: new FormControl('', [Validators.required, Validators.pattern(`^(19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1])$`),]),
    fecha_nacimiento: new FormControl('', [Validators.required, Validators.pattern(`^(19[0-9]{2}|20[0-9]{2})-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1])$`),]),
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
  /*       Se comenta linea de codigo no requerida
        get dni() {
          return this.formu.get('dni')as FormControl;
        } */

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
  
    this.empleadoService.guardarRegistroEmpleado(valores)
    .subscribe({
      next: () => {
        this.resetForm();
        this.successMessage = 'El registro del empleado se guardó correctamente.';
        setTimeout(this.resetForm.bind(this), 4000);
      },
      error: (error) => {
        this.errorMessage = 'Error al guardar el registro del empleado. Por favor, inténtalo nuevamente.';
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
}
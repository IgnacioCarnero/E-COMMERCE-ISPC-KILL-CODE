/* import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms'; */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent {
  formuempresa: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formuempresa = this.formBuilder.group({
      cuit: ['', Validators.required],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(3)]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      provincia: ['', [Validators.required, Validators.minLength(3)]],
      art: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  get cuit() {
    return this.formuempresa.get('cuit')as FormControl;
  }

get nombre() {
  return this.formuempresa.get('nombre') as FormControl;
}

get direccion() {
  return this.formuempresa.get('direccion')as FormControl;
}

get ciudad() {
  return this.formuempresa.get('ciudad')as FormControl;
}

get provincia() {
  return this.formuempresa.get('provincia')as FormControl;
}

get art() {
  return this.formuempresa.get('art')as FormControl;
}

  guardarRegistroempresa() {
  if (this.formuempresa.invalid) {
    console.log('El formulario tiene errores de validación');
    console.log(this.formuempresa.errors);
    console.log(this.nombre?.errors);

    return;
  }
  const valores = this.formuempresa.value;
  console.log(valores);
  this.formuempresa.reset();
}
resetFormularioempresa() {
  this.formuempresa.reset();
}
}



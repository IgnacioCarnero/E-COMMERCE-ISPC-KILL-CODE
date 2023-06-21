import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userRegister!: FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient) {
    this.createForm();
  }

  createForm() {
    this.userRegister = this.fb.group({
      companynameregister: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      emailregister: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      userpasswordregister: ['', [Validators.required, Validators.minLength(8)]],
      confirmpasswordregister: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: this.passwordEqual('userpasswordregister', 'confirmpasswordregister')
    });
  }

  get companyNameInvalid() {
    return this.userRegister.get('companynameregister')?.invalid && this.userRegister.get('companynameregister')?.touched;
  }

  get emailInvalid() {
    return this.userRegister.get('emailregister')?.invalid && this.userRegister.get('emailregister')?.touched;
  }

  get userPasswordInvalid() {
    return this.userRegister.get('userpasswordregister')?.invalid && this.userRegister.get('userpasswordregister')?.touched;
  }

  get confirmPasswordInvalid() {
    return this.userRegister.get('confirmpasswordregister')?.invalid && this.userRegister.get('confirmpasswordregister')?.touched;
  }


  save() {
    if (this.userRegister.invalid) {
      return Object.values(this.userRegister.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    }

    // Enviar los datos al backend
    const formData = this.userRegister.value;
    this.http.post('http://localhost:8000/api/auth/register/', formData).subscribe(
      (response) => {
        // Éxito en la creación del usuario
        console.log('Usuario creado:', response);
        // Realizar acciones adicionales, como redireccionar a la página de inicio de sesión
      },
      (error) => {
        // Error en la creación del usuario
        console.error('Error al crear el usuario:', error);

      }
    );
  }




  passwordEqual(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control && pass2Control) {
        if (pass1Control.value === pass2Control.value) {
          pass2Control.setErrors(null);
        } else {
          pass2Control.setErrors({ notEqual: true });
        }
      }
    };
  }
}

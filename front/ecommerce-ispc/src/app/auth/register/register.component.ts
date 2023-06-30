import { RegisterService } from 'src/app/services/register.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerFailed = '';
  public registerSucces='';

  userRegister!: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router, private modalService: ModalService) {
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
  this.registerService.register(formData).subscribe(
    (response) => {
      // Éxito en la creación del usuario
      console.log('Usuario creado:', response);

      setTimeout(() => {
        this.modalService.closeModal();
      }, 2000);
      this.router.navigate(['']);
      // Realizar acciones adicionales, como redireccionar a la página de inicio de sesión

      this.registerSucces='Usuario creado con exito. Sera redirigido al inicio.'
    },
    (error) => {
      // Error en la creación del usuario
      if (error.status === 400 && error.error.error === 'El correo electrónico ya está registrado') {
        // Mostrar mensaje de error en el formulario
        this.userRegister.get('emailregister')?.setErrors({ duplicateEmail: true });
        this.registerFailed='El correo electrónico ya está registrado'
      } else {
        this.registerFailed='Error al crear el usuario.'
      }
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

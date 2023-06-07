import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submited = false
  //validaciones

  userLogin = new FormGroup({
  username : new FormControl('', [Validators.required,  Validators.email]),
  userpassword : new FormControl('', [Validators.required, Validators.minLength(10)])

  })

  submitData() {

    this.submited = true

    if(this.userLogin.invalid) {
      return
    }
    console.warn(this.userLogin.value);

    alert("Enviado")
  }

  get username() {
    return this.userLogin.get('username')
  }

  get userpassword() {
    return this.userLogin.get('userpassword')
  }
}

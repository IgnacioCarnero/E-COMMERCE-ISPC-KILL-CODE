import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userRegister = new FormGroup ({
    companynameregister: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    usernameregister: new FormControl('', [Validators.required,Validators.email]),
    userpasswordregister: new FormControl('',[Validators.required,Validators.minLength(10)]),
    confirmpasswordregister: new FormControl('',[Validators.required,Validators.minLength(10)]),


  })

  get companynameregister() {
    return this.userRegister.get('companynameregister')
  }

  get usernameregister() {
    return this.userRegister.get('usernameregister')
  }

  get userpasswordregister() {
    return this.userRegister.get('userpasswordregister')
  }

  get confirmpasswordregister() {
    return this.userRegister.get('confirmpasswordregister')
  }
}

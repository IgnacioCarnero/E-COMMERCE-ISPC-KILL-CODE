import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  dynamicIdSuffix: number = 1; // Asigna un valor inicial único

  // Lógica para generar un sufijo único
  generateDynamicIdSuffix() {
    this.dynamicIdSuffix++;
  }

  submited = false
  loggedInUserEmail: string = '';
  //validaciones

  userLogin = new FormGroup({
    email : new FormControl('', [Validators.required,  Validators.email]),
    userpassword : new FormControl('', [Validators.required, Validators.minLength(8)])

  });

  submitData(): void {
    this.submited = true;

    if (this.userLogin.invalid) {
      return;
    }

    const email = this.userLogin.value.email;
    const password = this.userLogin.value.userpassword;

    if(email && password){
      this.authService.login(email, password);
    }
  }
}

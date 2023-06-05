import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit() {
      this.loadUsers();
    }

  loadUsers(): void {
    this.loginService.getUsers().subscribe(
      (users) => {
        if (users.length > 0) {
        const user = users[0]; // supongamos que queremos extraer los primeros usuarios del array
        this.email = user.email; // remplazamos por email el la propiedad de obejto de usuario
        this.password = user.password; // remplazamos por password el la propiedad de obejto de usuario
        this.message = 'El cargado de usuarios fue un éxito!';
      } else {
        this.message = 'No se encontraron usuarios.';
      }
      },
      (error) => {
      this.message = 'No se pudieron cargar los usuarios.';
      console.error(error);
    }
  );
}
    onSubmit(form: NgForm): void {
      if (form.valid) {
        const email = this.email;
        const password = this.password;
        // Call your authentication service to handle the login logic
        this.loginService.login(email, password).subscribe(
        (response: any) => {
        // Handle the successful login response
            console.log('Login successful:', response);
        },
        (error: any) => {
        // Handle the login error
            console.error('Login error:', error);
      }
    );
  }
  }
}



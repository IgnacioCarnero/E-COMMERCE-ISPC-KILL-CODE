import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor(private loginService: LoginService) {}

    public onSubmit(form: NgForm) {
      const formData = {
        email: this.email,
        password: this.password
    };
    const formDataString = JSON.stringify(formData);
    this.loginService.post(formDataString).subscribe(
        (response) => {
        console.log('El login fue un éxito!!', response);
      },
      (error) => {
        console.log('EL login no fue un éxito!!', error);
      }
    );
  }

    public onUpdate(id: number, form: NgForm) {
        const formData = {
        email: this.email,
        password: this.password
    };

    const formDataString = JSON.stringify(formData);

    this.loginService.put(id, formDataString).subscribe(
      (response) => {
        console.log('La actualización fue un éxito!!', response);
      },
      (error) => {
        console.log('La actualización no fue un éxito!!', error);
      }
    );

  }

    public onDelete(id: number) {
      this.loginService.delete(id).subscribe(
      (response) => {
        console.log('La eliminación fue un éxito!!', response);
      },
      (error) => {
        console.log('La eliminación no fue un éxito!!', error);
      }
    );
    }

}




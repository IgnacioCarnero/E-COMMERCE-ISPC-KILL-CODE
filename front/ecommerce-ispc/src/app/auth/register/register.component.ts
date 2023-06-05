import { Component } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private signupService: SignupService) {}

  public onSubmit(form: NgForm) {
    const formData = {
      nombreDeLaEmpresa: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };
    const formDataString = JSON.stringify(formData);
    this.signupService.post(formDataString).subscribe(
      (response) => {
        console.log('La registración fue un éxito!!', response);
      },
      (error) => {
        console.log('La registración no fue un éxito!!', error);
      }
    );
  }

  public onUpdate(id: number, form: NgForm) {
    const formData = {
      nombreDeLaEmpresa: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    };
    const formDataString = JSON.stringify(formData);
    this.signupService.put(id, formDataString).subscribe(
      (response) => {
        console.log('La actualización fue un éxito!!', response);
      },
      (error) => {
        console.log('La actualización no fue un éxito!!', error);
      }
    );
  }

  public onDelete(id: number) {
    this.signupService.delete(id).subscribe(
      (response) => {
        console.log('La eliminación fue un éxito!!', response);
      },
      (error) => {
        console.log('La eliminación no fue un éxito!!', error);
      }
    );
  }
}


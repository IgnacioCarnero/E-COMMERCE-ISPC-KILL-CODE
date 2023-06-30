import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from './modal.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = false;
  public errorMessage:string =''
  private loggedInUserEmail = '';
  private userIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  userId$: Observable<number | null> = this.userIdSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: ModalService
  ) { }

  setUserId(userId: number) {
    this.userIdSubject.next(userId);
  }

  login(email: string, password: string): void {
    const loginData = {
      email: email,
      password: password
    };

    this.http.post<any>('http://localhost:8000/api/auth/login/', loginData).subscribe({
      next: (response) => {
        if (email && password) {
          // Lógica después de autenticarte exitosamente
          this.loggedInUserEmail = email;
          this.isAuthenticated = true;
          console.log(response); // Puedes imprimir la respuesta en la consola para verificarla
          this.setUserId(response.id); // Almacenar el ID del usuario

          // Cierra el modal utilizando el servicio ModalService después de un retraso de 0ms
          setTimeout(() => {
            this.modalService.closeModal();
          }, 0);

          // Redirigir a otra página, guardar el token de autenticación, etc.
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        console.error(error);
        // Manejo de errores en caso de que la autenticación falle
        // Puedes mostrar un mensaje de error al usuario, por ejemplo.
        this.errorMessage='Credenciales incorrectas. Por favor, verifica tu correo electrónico y contraseña.'
      }
    });
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getLoggedInUserEmail(): string {
    return this.loggedInUserEmail;
  }

  logout(): void {
    // Lógica para cerrar la sesión del usuario
    // Aquí debes realizar las acciones necesarias para cerrar la sesión con tu backend

    // Luego de cerrar la sesión, restablece el estado de autenticación y el email del usuario
    this.isAuthenticated = false;
    this.loggedInUserEmail = '';
    // Eliminar las cookies relacionadas con la sesión
    document.cookie = 'csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Realiza la petición HTTP para cerrar la sesión en el backend
    this.http.post<any>('http://localhost:8000/api/auth/logout/', {}).subscribe({
      next: (response) => {
        console.log(response); // Puedes imprimir la respuesta en la consola para verificarla
        // Redirige a la página de inicio de sesión u otra página relevante
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(error);
        // Manejo de errores en caso de que el cierre de sesión falle
        // Puedes mostrar un mensaje de error al usuario, por ejemplo.
      }
    });
  }
}

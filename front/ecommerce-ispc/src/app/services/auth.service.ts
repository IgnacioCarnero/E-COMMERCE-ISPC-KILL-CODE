import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private loggedInUserEmail = '';

  constructor(private http: HttpClient, private router: Router, private modalService: ModalService) { }

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
        // Redirigir a otra página, guardar el token de autenticación, etc.
        this.router.navigate(['/']);
        // Cierra el modal utilizando el servicio ModalService
        this.modalService.closeModal();
        }
      },
      error: (error) => {
      console.error(error);
      // Manejo de errores en caso de que la autenticación falle
      // Puedes mostrar un mensaje de error al usuario, por ejemplo.
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
  
    // Realiza la petición HTTP para cerrar la sesión en el backend
    this.http.post<any>('http://localhost:8000/api/auth/logout', {}).subscribe({
      next: (response) => {
      console.log(response); // Puedes imprimir la respuesta en la consola para verificarla
      // Redirige a la página de inicio de sesión u otra página relevante
      this.router.navigate(['/login']);
      },
      error: (error) => {
      console.error(error);
      // Manejo de errores en caso de que el cierre de sesión falle
      // Puedes mostrar un mensaje de error al usuario, por ejemplo.
      }
    });
  }
}

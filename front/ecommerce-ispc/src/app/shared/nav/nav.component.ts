import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  loggedInUserEmail: string = '';
  isLoggedIn: boolean = false;

  constructor(public authService: AuthService, private modalService: ModalService) { 
    this.loggedInUserEmail = this.getLoggedInUserEmail();
  }
  

  ngOnInit() {
    this.isLoggedIn = this.authService.getIsAuthenticated();
    console.log(this.isLoggedIn);
  }

  openModal(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.style.display = 'block';
      modalElement.classList.add('show');
      this.modalService.setModalElement(modalElement);
    }
  }
  
  getIsAuthenticated(): boolean {
    return this.authService.getIsAuthenticated();
  }

  getLoggedInUserEmail(): string {
    return this.authService.getLoggedInUserEmail();
  }

  logout(): void {
    this.authService.logout();
    // Resto de la lógica después de cerrar sesión, como redireccionamiento, etc.
  }
}
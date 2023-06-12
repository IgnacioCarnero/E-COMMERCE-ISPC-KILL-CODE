import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModalService } from '../../services/modal.service';
import { LoginComponent } from '../../auth/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from 'src/app/auth/register/register.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;
  loggedInUserEmail: string = '';
  isLoggedIn: boolean = false;

  constructor(public authService: AuthService, private modalService: ModalService, private ngbModal: NgbModal) { 
    this.loggedInUserEmail = this.getLoggedInUserEmail();
  }
  

  ngOnInit() {
    this.isLoggedIn = this.authService.getIsAuthenticated();
    console.log(this.isLoggedIn);
  }

  openLoginModal(): void {
    this.modalService.openModal(LoginComponent);
  }

  openRegisterModal(): void {
    this.modalService.openModal(RegisterComponent);
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
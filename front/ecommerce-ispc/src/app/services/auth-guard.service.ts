import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; // Reemplaza "ruta-de-tu-servicio-de-autenticacion" con la ruta correcta de tu servicio de autenticación

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkAuthentication(state.url);
    }

    canActivateChild(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkAuthentication(state.url);
    }

    private checkAuthentication(url: string): boolean | UrlTree {
      if (this.authService.getIsAuthenticated()) {
        return true;
      } else {
        // Si el usuario no está autenticado, redirige a la página de inicio de sesión o a otra página apropiada
        return this.router.parseUrl('/'); // Reemplaza '/' con la URL de redirección deseada
      }
    }
  }




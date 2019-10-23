import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    console.log('AuthGuard');
    return this.verificarAcesso();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanLoad: verificando se o usuario pode carregar o codigo do modulo.');
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.usarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}

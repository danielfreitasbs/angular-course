import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosGuard implements CanActivateChild{ 

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
      ): Observable<boolean> | boolean {
          console.log('AlunosGuard: Guarda de Rota Filha.');
          return true;
      }
}
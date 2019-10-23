import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivatedGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
        component: AlunoFormComponent,
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('Guarda de Desativação!');

        //return component.podeMudarRota();
        return component.podeDesativar();
    }
}
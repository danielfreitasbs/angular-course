import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'teste' && usuario.senha === 'teste'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }else{
      this.mostrarMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
    }
  }

  usarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}

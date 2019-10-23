import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {


  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'email@teste.com'},
    {id: 2, nome: 'Aluno 02', email: 'email@teste.com'},
    {id: 3, nome: 'Aluno 03', email: 'email@teste.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    let alunos = this.getAlunos();
    // tslint:disable-next-line:prefer-for-of
    for(let i = 0; i < alunos.length; i++){
      let aluno = alunos[i];
      if(aluno.id == id) {
        return aluno;
      }
    }

    return null;
  }

  constructor() { }
}

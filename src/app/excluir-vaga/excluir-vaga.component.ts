import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';



@Component({
  selector: 'app-excluir-vaga',
  templateUrl: './excluir-vaga.component.html',
  styleUrls: ['./excluir-vaga.component.css']
})
export class ExcluirVagaComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);

  
  public vagas: Vaga[] = []; 

 
  constructor(private _vagasService: VagasService ){}

 

    
  ngOnInit(): void {

    this.listarVagas();

    
   
  } 


       
  listarVagas(){

    this._vagasService.getVagas().
    subscribe(
      retornaVaga => {
        this.vagas = retornaVaga.map(
          item=> {
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          }
        )
      }
    )

  }

  excluir(id: number): void{
    this._vagasService.removerVaga(id).subscribe(() => {
      this._vagasService.exibirMensagem(
        'SISTEMA',
        `${id} foi excluido com sucesso !!`,
        'toast-error'

      );
    });

    window.location.href = "/mural";
  }  

  


}
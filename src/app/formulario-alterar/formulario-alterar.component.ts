import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';


@Component({
  selector: 'app-formulario-alterar',
  templateUrl: './formulario-alterar.component.html',
  styleUrls: ['./formulario-alterar.component.css']
})
export class FormularioAlterarComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);

  

  constructor(private _vagasService: VagasService, 
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

    ngOnInit(): void {
      const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
      this._vagasService.buscarPorId(id).subscribe(retorno => {
        this.vaga = retorno;
      });
    }

 

    atualizar(id: number){
      this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"", "", "", 0)},
      err => this._vagasService.exibirMensagem(
        'SISTEMA',
        `Vaga referente ao ID ${id} foi alterada com sucesso !!`,
        'toast-error'

      )
      );

      window.location.href =  "/mural";
    }
 
   
  }  

   



/* atualizar(id: number): void{
  this._vagasService.atualizarVaga(id, this.vaga).subscribe(retorno => {
    this.vaga = retorno;
    this._vagasService.exibirMensagem(
      'SISTEMA',
      `${this.vaga.nome} foi alterada com sucesso.`,
      'toast-error'

    );
  }
  ); */
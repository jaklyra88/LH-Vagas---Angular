import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';


@Component({
  selector: 'app-formulario-alterar',
  templateUrl: './formulario-alterar.component.html',
  styleUrls: ['./formulario-alterar.component.css']
})
export class FormularioAlterarComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

 

  atualizar(id: number){
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao Atualizar")}
    );

    window.location.href =  "/mural";
  } 

   
}

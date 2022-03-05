import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-formulario-excluir',
  templateUrl: './formulario-excluir.component.html',
  styleUrls: ['./formulario-excluir.component.css']
})
export class FormularioExcluirComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService: VagasService ) {}

   
  ngOnInit(): void {

    
  }

  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      vaga => {this.vaga = new Vaga(0, "", "", "", 0)},
      err => {console.log("Erro ao Excluir")}
    );

    window.location.href = "/mural";
  }  

  

}

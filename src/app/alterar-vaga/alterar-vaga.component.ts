import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alterar-vaga',
  templateUrl: './alterar-vaga.component.html',
  styleUrls: ['./alterar-vaga.component.css']
})
export class AlterarVagaComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);

  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService,
    private router: Router,
    private route: ActivatedRoute) { }

  

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

}

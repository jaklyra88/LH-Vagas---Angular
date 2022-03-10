 import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';


import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { Vaga } from './models/Vagas.model';
import { ToastrService } from 'ngx-toastr';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';


@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient, private toastr: ToastrService) { }

  getVagas(): Observable<Vaga[]>{
  return this._httpClient.get<Vaga[]>(this.url);
  }
  
  cadastrarVaga(vaga: Vaga):Observable<Vaga[]>{
    return this._httpClient.post<Vaga[]>(this.url,vaga).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
   
  atualizarVaga(id:any, vaga: Vaga): Observable<Vaga[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Vaga[]>(urlAtualizar, vaga).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
      );
  }  

  removerVaga(id:any):Observable<Vaga[]>{
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Vaga[]>(urlDeletar).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
      );
    
  }

  buscarPorId(id: number): Observable <Vaga> {
    return this._httpClient.get<Vaga>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
      );
  }

  exibeErro(e: any): Observable<any>{
    this.exibirMensagem('ERRO !!', 'Não foi possível realizar a operação', 'toastr-error');
    return EMPTY;

  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);

  }

}






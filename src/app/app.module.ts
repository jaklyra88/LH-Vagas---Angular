import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { CadastroVagasComponent } from './cadastro-vagas/cadastro-vagas.component';
import { FormsModule } from '@angular/forms';
import { AlterarVagaComponent } from './alterar-vaga/alterar-vaga.component';
import { ExcluirVagaComponent } from './excluir-vaga/excluir-vaga.component';
import { FormularioAlterarComponent } from './formulario-alterar/formulario-alterar.component';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'




@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent,
    CadastroVagasComponent,
    MenuComponent,
    RodapeComponent,
    AlterarVagaComponent,
    ExcluirVagaComponent,
    FormularioAlterarComponent,
   

    
  
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

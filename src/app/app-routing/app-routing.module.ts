import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { CadastroVagasComponent } from '../cadastro-vagas/cadastro-vagas.component';
import { ExcluirVagaComponent } from '../excluir-vaga/excluir-vaga.component';
import { AlterarVagaComponent } from '../alterar-vaga/alterar-vaga.component';
import { FormularioExcluirComponent } from '../formulario-excluir/formulario-excluir.component';
import { FormularioAlterarComponent } from '../formulario-alterar/formulario-alterar.component';


const rotas: Routes = [
  {path: 'mural', component: MuralVagasComponent},
  {path: 'cadastro' , component: CadastroVagasComponent},
  {path: 'alterar' , component: AlterarVagaComponent},
  {path: 'excluir' , component: ExcluirVagaComponent},  
  {path: 'formulario_excluir' , component: FormularioExcluirComponent},
  {path: 'formulario_alterar', component: FormularioAlterarComponent},
   {path: '', redirectTo: '/mural', pathMatch: 'full'}
]                                           


@NgModule({
  declarations: [],
  
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
  
})



export class AppRoutingModule { }

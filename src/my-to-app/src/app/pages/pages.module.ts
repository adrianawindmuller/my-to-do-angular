import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RemoverTarefaModalComponent } from './home/tarefa-container/remover-tarefa-modal/remover-tarefa-modal.component';
import { AlterarTarefaModalComponent } from './home/tarefa-container/alterar-tarefa-modal/alterar-tarefa-modal.component';
import { TarefaComponent } from './home/tarefa-container/tarefa/tarefa.component';
import { TarefaContainerComponent } from './home/tarefa-container/tarefa-container.component';
import { AdicionarTarefaComponent } from './home/adicionar-tarefa/adicionar-tarefa.component';
import { PesquisaInputComponent } from './pesquisa/pesquisa-input/pesquisa-input.component';
import { PesquisaResultadoComponent } from './pesquisa/pesquisa-resultado/pesquisa-resultado.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AdicionarTarefaComponent,
    TarefaContainerComponent,
    TarefaComponent,
    AlterarTarefaModalComponent,
    RemoverTarefaModalComponent,
    PesquisaResultadoComponent,
    PesquisaInputComponent,
  ],
  imports: [SharedModule],
  exports: [
    HomeComponent,
    AboutComponent,
    AdicionarTarefaComponent,
    TarefaContainerComponent,
    TarefaComponent,
    AlterarTarefaModalComponent,
    RemoverTarefaModalComponent,
    PesquisaResultadoComponent,
    PesquisaInputComponent,
  ],
})
export class PagesModules {}

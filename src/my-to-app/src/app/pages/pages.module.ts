import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RemoverTarefaModalComponent } from './home/tarefa-container/remover-tarefa-modal/remover-tarefa-modal.component';
import { AlterarTarefaModalComponent } from './home/tarefa-container/alterar-tarefa-modal/alterar-tarefa-modal.component';
import { TarefaComponent } from './home/tarefa-container/tarefa/tarefa.component';
import { TarefaContainerComponent } from './home/tarefa-container/tarefa-container.component';
import { AdicionarTarefaComponent } from './home/adicionar-tarefa/adicionar-tarefa.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AdicionarTarefaComponent,
    TarefaContainerComponent,
    TarefaComponent,
    AlterarTarefaModalComponent,
    RemoverTarefaModalComponent,
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
  ],
})
export class PagesModules {}

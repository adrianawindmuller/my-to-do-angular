import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AlterarTarefaModalComponent } from './home/tarefas/alterar-tarefa-modal/alterar-tarefa-modal.component';
import { TarefasComponent } from './home/tarefas/tarefas.component';
import { PesquisaInputComponent } from './pesquisa/pesquisa-input/pesquisa-input.component';
import { PesquisaResultadoComponent } from './pesquisa/pesquisa-resultado/pesquisa-resultado.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TarefasComponent,
    AlterarTarefaModalComponent,
    PesquisaResultadoComponent,
    PesquisaInputComponent,
    LoginComponent,
  ],
  imports: [SharedModule,ToastrModule.forRoot()],
  exports: [
    HomeComponent,
    AboutComponent,
    TarefasComponent,
    AlterarTarefaModalComponent,
    PesquisaResultadoComponent,
    PesquisaInputComponent,
    LoginComponent,
  ],
})
export class PagesModules {}

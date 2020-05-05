import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { FiltroComponent } from './filtro/filtro.component';
import { TarefaContainerComponent } from './tarefa-container/tarefa-container.component';
import { TarefaComponent } from './tarefa-container/tarefa/tarefa.component';
import { TarefaService } from './shared/tarefa.service';
import { HeaderComponent } from './header/header.component';
import { RemoverTarefaModalComponent } from './tarefa-container/remover-tarefa-modal/modal.component';
import { AlterarTarefaModalComponent } from './tarefa-container/alterar-tarefa-modal/alterar-tarefa-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AdicionarTarefaComponent,
    FiltroComponent,
    TarefaContainerComponent,
    TarefaComponent,
    HeaderComponent,
    AlterarTarefaModalComponent,
    RemoverTarefaModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

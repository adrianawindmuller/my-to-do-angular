import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { TarefaContainerComponent } from './tarefa-container/tarefa-container.component';
import { TarefaComponent } from './tarefa-container/tarefa/tarefa.component';
import { TarefaService } from './shared/tarefa.service';
import { RemoverTarefaModalComponent } from './tarefa-container/remover-tarefa-modal/remover-tarefa-modal.component';
import { AlterarTarefaModalComponent } from './tarefa-container/alterar-tarefa-modal/alterar-tarefa-modal.component';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarTarefaComponent,
    TarefaContainerComponent,
    TarefaComponent,
    AlterarTarefaModalComponent,
    RemoverTarefaModalComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AppLayoutModule,
  ],
  exports: [AdicionarTarefaComponent, TarefaContainerComponent],
  providers: [TarefaService],
  bootstrap: [AppComponent],
})
export class AppModule {}

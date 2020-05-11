import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from './tarefa.model';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-tarefa-container',
  templateUrl: './tarefa-container.component.html',
  styles: [
    `
      .mat-radio-button {
        font-size: 14px;
      }
    `,
  ],
})
export class TarefaContainerComponent implements OnInit {
  pesquisa: string;
  tarefas: Tarefa[] = [];
  tarefasFiltro: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.tarefaService.obterTarefas();
    this.tarefasFiltro = this.tarefaService.obterTarefasFiltro();
  }

  filtrarEstadoTarefa($event: MatRadioChange) {
    switch ($event.value) {
      case 'todas':
        this.restaurarFiltro();
        break;
      case 'concluidas':
        this.restaurarFiltro();
        this.tarefasFiltro = this.tarefasFiltro.filter((t) => t.concluido);
        break;
      case 'naoConcluidas':
        this.restaurarFiltro();
        this.tarefasFiltro = this.tarefasFiltro.filter((t) => !t.concluido);
        break;
    }
  }

  restaurarFiltro() {
    this.tarefasFiltro = [...this.tarefas];
  }
}

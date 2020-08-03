import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../shared/tarefa.service';
import { Tarefa } from './tarefa.model';
import { MatRadioChange } from '@angular/material/radio';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tarefa-container',
  templateUrl: './tarefa-container.component.html',
  styleUrls: ['./tarefa.container.component.css'],
})
export class TarefaContainerComponent implements OnInit {
  pesquisa: string;
  tarefas$: Observable<Tarefa[]>;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefas$ = this.tarefaService.tarefas;
    this.tarefaService.obterTarefas();
  }

  filtrarEstadoTarefa($event: MatRadioChange): void {
    switch ($event.value) {
      case 'todas':
        this.tarefaService.obterTarefas();
        break;
      case 'concluidas':
        this.tarefaService.obterTarefas(true);
        break;
      case 'naoConcluidas':
        this.tarefaService.obterTarefas(false);
        break;
    }
  }
}

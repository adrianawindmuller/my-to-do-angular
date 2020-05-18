import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from './tarefa.model';
import { MatRadioChange } from '@angular/material/radio';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-tarefa-container',
  templateUrl: './tarefa-container.component.html',
  styleUrls: ['./tarefa.container.component.css'],
})
export class TarefaContainerComponent implements OnInit {
  pesquisa: string;
  tarefas: Tarefa[] = [];
  // sub: Subscription;
  tarefas$: Observable<Tarefa[]>;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefas$ = this.tarefaService.tarefas;
    this.tarefaService.obterTarefas();
  }

  filtrarEstadoTarefa($event: MatRadioChange): void {
    switch ($event.value) {
      case 'todas':
        this.restaurarFiltro();
        break;
      case 'concluidas':
        this.restaurarFiltro();
        this.tarefas = this.tarefas.filter((t) => t.concluido);
        break;
      case 'naoConcluidas':
        this.tarefaService.obterTarefas();
        this.tarefaService
          .trazerTarefas()
          .subscribe((result) => this.tarefas.filter((t) => !t.concluido));
        break;
    }
  }

  restaurarFiltro(): void {
    this.tarefaService.obterTarefas();
    this.tarefaService.tarefas.subscribe((result) => {
      this.tarefas = result;
      this.tarefas = this.tarefas.filter((t) => !t.concluido);
    });
  }

  get temTarefa(): Boolean {
    return this.tarefas.length == 0;
  }
}

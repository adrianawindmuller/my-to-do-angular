import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from './tarefa.model';

@Component({
  selector: 'app-tarefa-container',
  templateUrl: './tarefa-container.component.html',
})
export class TarefaContainerComponent implements OnInit {

  tarefas: Tarefa[] = []

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.tarefaService.obterTarefas()
  }


}


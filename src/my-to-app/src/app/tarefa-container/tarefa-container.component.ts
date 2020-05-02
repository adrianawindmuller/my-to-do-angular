import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Tarefa } from './tarefa.model';

@Component({
  selector: 'app-tarefa-container',
  templateUrl: './tarefa-container.component.html',
  styleUrls: ['./tarefa-container.component.css'],
})
export class TarefaContainerComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor() {}

  ngOnInit(): void {
    this.tarefas.push(new Tarefa(123, true, 'ir ao mercado'));
    this.tarefas.push(new Tarefa(123, false, 'ir ao farmacia'));
    this.tarefas.push(new Tarefa(123, true, 'ir ao shopping'));
  }
}

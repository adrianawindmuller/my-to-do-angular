import { Injectable } from '@angular/core';
import { Tarefa } from '../tarefa-container/tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefas: Tarefa[] = [];

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }

  obterTarefas() {
    return this.tarefas;
  }

  removerTarefa(item: Tarefa) {
    const index = this.tarefas.indexOf(item);
    this.tarefas.splice(index, 1);
  }
}

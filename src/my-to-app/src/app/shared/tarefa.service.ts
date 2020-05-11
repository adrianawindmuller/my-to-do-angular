import { Injectable } from '@angular/core';
import { Tarefa } from '../tarefa-container/tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefas: Tarefa[] = [];
  tarefasFiltro: Tarefa[] = [];

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
    this.tarefasFiltro.push(tarefa);
  }

  obterTarefas() {
    return this.tarefas;
  }

  obterTarefasFiltro() {
    return this.tarefasFiltro;
  }

  removerTarefa(item: Tarefa) {
    const index = this.tarefas.indexOf(item);
    this.tarefas.splice(index, 1);
    this.tarefasFiltro.splice(index, 1);
  }

  alterarTarefa(id: string, descricao: string) {
    this.tarefas.find((x) => x.id == id).descricao = descricao;
    this.tarefasFiltro.find((x) => x.id == id).descricao = descricao;
  }
}

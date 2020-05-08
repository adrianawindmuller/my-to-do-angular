import { Injectable } from '@angular/core';
import { Tarefa } from '../tarefa-container/tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  tarefas: Tarefa[] = [];

  adicionarTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
    console.log(`criando: ${JSON.stringify(tarefa)}`);
  }

  obterTarefas() {
    return this.tarefas;
  }

  removerTarefa(item: Tarefa) {
    const index = this.tarefas.indexOf(item);
    this.tarefas.splice(index, 1);
  }

  alterarTarefa(id: string, descricao: string) {
    let tarefa = this.tarefas.find((x) => x.id == id);
    tarefa.descricao = descricao;
    console.log(`editando: ${JSON.stringify(tarefa)}`);
  }
}

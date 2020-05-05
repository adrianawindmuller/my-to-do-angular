import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../tarefa-container/tarefa.model';
import { InputTarefaComponent } from '../shared/input-tarefa/input-tarefa.component';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
})
export class AdicionarTarefaComponent implements OnInit {
  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {}

  adicionarTarefa() {
    // let tarefa = new Tarefa(this.tarefaForm.get('nomeTarefa').value)
    // this.tarefaService.adicionarTarefa(tarefa)
    // this.tarefaForm.get('nomeTarefa').reset()
  }
}

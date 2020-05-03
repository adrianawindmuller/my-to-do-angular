import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tarefa } from '../tarefa-container/tarefa.model';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html'
})
export class AdicionarTarefaComponent implements OnInit {

  tarefaForm: FormGroup

  constructor(private tarefaService: TarefaService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tarefaForm = this.fb.group({
      nomeTarefa: this.fb.control('', [Validators.required, Validators.minLength(5), ])
    })
  }

  adicionarTarefa(){
    let tarefa = new Tarefa(this.tarefaForm.get('nomeTarefa').value)
    this.tarefaService.adicionarTarefa(tarefa)
  }

}

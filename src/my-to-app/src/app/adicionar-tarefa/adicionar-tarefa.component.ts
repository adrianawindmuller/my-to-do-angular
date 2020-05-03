import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../tarefa-container/tarefa.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrls: ['./adicionar-tarefa.component.css']
})
export class AdicionarTarefaComponent implements OnInit {

  tarefaForm: FormGroup

  constructor(private tarefaService: TarefaService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tarefaForm = this.fb.group({
      nometarefa: this.fb.control('', [Validators.required, Validators.minLength(5), ])
    })
  }

  adicionarTarefa(){
    let tarefa = new Tarefa()
    this.tarefaService.adicionarTarefa()
  }

}

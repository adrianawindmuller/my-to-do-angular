import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Tarefa } from '../tarefa-container/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';
import { ValidatorInput } from '../shared/validator-input';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styles: [
    `
      .mat-icon-button {
        font-size: 25px !important;
      }
    `,
  ],
})
export class AdicionarTarefaComponent implements OnInit {
  form: FormGroup;

  constructor(private tarefaService: TarefaService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nomeTarefa: this.fb.control('', ValidatorInput),
    });
  }

  adicionarTarefa() {
    let tarefa = new Tarefa(this.form.get('nomeTarefa').value);
    this.tarefaService.adicionarTarefa(tarefa);

    this.form.get('nomeTarefa').reset();
  }
}

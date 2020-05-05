import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-tarefa',
  templateUrl: './input-tarefa.component.html'
})
export class InputTarefaComponent implements OnInit {

  tarefaForm : FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tarefaForm = this.fb.group({
      nomeTarefa: this.fb.control('', [Validators.required, Validators.minLength(5), ])
    })
  }



}

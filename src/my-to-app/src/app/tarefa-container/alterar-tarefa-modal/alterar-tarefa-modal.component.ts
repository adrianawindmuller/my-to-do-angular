import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorInput } from 'src/app/shared/validator-input';

@Component({
  selector: 'app-alterar-tarefa-modal',
  templateUrl: './alterar-tarefa-modal.component.html',
})
export class AlterarTarefaModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TarefaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
      private fb: FormBuilder) {}

form: FormGroup

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeTarefa: this.fb.control('', ValidatorInput),
    });
  }

  atualizarTarefa() {
    this.dialogRef.close(this.data);
  }

  sair() {
    this.dialogRef.close();
  }
}

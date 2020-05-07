import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarefaComponent } from '../tarefa/tarefa.component';

@Component({
  selector: 'app-alterar-tarefa-modal',
  templateUrl: './alterar-tarefa-modal.component.html',
})
export class AlterarTarefaModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TarefaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  atualizarTarefa() {
    this.dialogRef.close(this.data.titulo);
  }

  sair() {
    this.dialogRef.close();
  }
}

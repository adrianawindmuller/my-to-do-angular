import { Component, OnInit } from '@angular/core';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './remover-tarefa-modal.component.html',
})
export class RemoverTarefaModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TarefaComponent>) {}

  ngOnInit(): void {}

  clickSim() {
    this.dialogRef.close(true)
  }

  clickNao() {
    this.dialogRef.close(false)
  }
}

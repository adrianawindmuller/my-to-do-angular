import { Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { TarefaComponent } from '../tarefa/tarefa.component';

@Component({
  selector: 'app-alterar-tarefa-modal',
  templateUrl: './alterar-tarefa-modal.component.html'
})

export class AlterarTarefaModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TarefaComponent>) { }

  ngOnInit(): void {
  }

}

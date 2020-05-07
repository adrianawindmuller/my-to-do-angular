import { Component, OnInit, Input } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from 'src/app/shared/tarefa.service';
import { MatDialog } from '@angular/material/dialog';
import { RemoverTarefaModalComponent } from '../remover-tarefa-modal/remover-tarefa-modal.component';
import { AlterarTarefaModalComponent } from '../alterar-tarefa-modal/alterar-tarefa-modal.component';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  @Input() tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, public modal: MatDialog) {}

  ngOnInit(): void {}

  removerTarefa() {
    const dialogRef = this.modal.open(RemoverTarefaModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((excluir) => {
      if (excluir) {
        this.tarefaService.removerTarefa(this.tarefa);
      }
    });
  }

  alterarTarefa() {
    const dialogRef = this.modal.open(AlterarTarefaModalComponent, {
      width: '400px',
      data: { titulo: this.tarefa.descricao },
    });

    dialogRef.afterClosed().subscribe((result) => {
      let tarefa = new Tarefa(result)
      this.tarefaService.alterarTarefa(result);
    });
  }
}

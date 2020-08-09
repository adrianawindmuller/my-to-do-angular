import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../shared/tarefa.service';
import { Tarefa } from './tarefa.model';
import { MatRadioChange } from '@angular/material/radio';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, CdkDragMove } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../../../shared/modal-confirm/modal-confirm.component';
import { AlterarTarefaModalComponent } from './alterar-tarefa-modal/alterar-tarefa-modal.component';

@Component({
  selector: 'app-tarefa-container',
  templateUrl: './tarefa-container.component.html',
  styleUrls: ['./tarefa.container.component.css'],
})
export class TarefaContainerComponent implements OnInit {
  pesquisa: string;
  tarefas$: Observable<Tarefa[]>;

  constructor(private tarefaService: TarefaService, public modal: MatDialog) {}

  ngOnInit() {
    this.tarefas$ = this.tarefaService.tarefas;
    this.tarefaService.obterTarefas();
  }

  filtrarEstadoTarefa($event: MatRadioChange): void {
    switch ($event.value) {
      case 'todas':
        this.tarefaService.obterTarefas();
        break;
      case 'concluidas':
        this.tarefaService.obterTarefas(true);
        break;
      case 'naoConcluidas':
        this.tarefaService.obterTarefas(false);
        break;
    }
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  removerTarefa(tarefa: Tarefa) {
    const dialogRef = this.modal.open(ModalConfirmComponent, {
      width: '400px',
    });
    dialogRef.componentInstance.configure('Deseja mesmo excluir a tarefa?')
    dialogRef.afterClosed().subscribe((excluir) => {
      if (excluir) {
        this.tarefaService
          .removerTarefa(tarefa.id)
          .subscribe((result) => this.tarefaService.obterTarefas());
      }
    });
  }

  alterarTarefa(tarefa: Tarefa) {
    const dialogRef = this.modal.open(AlterarTarefaModalComponent, {
      width: '400px',
      data: { id: tarefa.id, descricao: tarefa.descricao },
    });

    dialogRef.afterClosed().subscribe((result) => {
      tarefa.descricao = result.descricao;

      this.tarefaService
        .alterarTarefa(tarefa)
        .subscribe(() => this.tarefaService.obterTarefas());
    });
  }

  concluirTarefa(tarefa: Tarefa) {
    this.tarefaService
      .alterarTarefa(tarefa)
      .subscribe(() => this.tarefaService.obterTarefas());
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { TarefaService } from '../../../shared/tarefa.service';
import { Tarefa } from './tarefa.model';
import { CdkDragDrop, moveItemInArray, CdkDragMove } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../../../shared/modal-confirm/modal-confirm.component';
import { AlterarTarefaModalComponent } from './alterar-tarefa-modal/alterar-tarefa-modal.component';
import { Lista } from './tarefa-lista.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorInput } from 'src/app/shared/validator-input';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarefa-container',
  templateUrl: './tarefa-container.component.html',
  styleUrls: ['./tarefa.container.component.css'],
})

export class TarefaContainerComponent implements OnInit {
  @Input() lista: Lista
  form: FormGroup;
  pesquisa: string;

  tarefasLista: Lista

  constructor(
      private tarefaService: TarefaService,
      public modal: MatDialog,
      private fb: FormBuilder,
      private toastr: ToastrService) {}

  ngOnInit() {
    this.tarefaService.getListaId(this.lista.id).subscribe(r => this.tarefasLista = r)

    this.form = this.fb.group({
      nomeTarefa: this.fb.control('', ValidatorInput),
    });
  }

  adicionarTarefa(): void {
    let tarefa = new Tarefa(this.form.get('nomeTarefa').value);
    this.lista.tarefas.push(tarefa)

    this.tarefaService.updateLista(this.lista).subscribe(() => {
        this.tarefaService.getListaId(this.lista.id).subscribe(r => this.tarefasLista = r)
        this.toastr.success('Tarefa Adicionada com sucesso')
    })

    this.form.get('nomeTarefa').reset();
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  removerTarefa(tarefa: Tarefa) {
    const dialogRef = this.modal.open(ModalConfirmComponent, {
      width: '400px',
    });
    dialogRef.componentInstance.configure('Deseja mesmo excluir a tarefa?')
    dialogRef.afterClosed().subscribe(() => {
        this.removerTarefaID(tarefa)

        this.tarefaService.updateLista(this.lista).subscribe(() => {
            this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)
            this.toastr.success('Tarefa Adicionada com sucesso')
        })
    })
  }

  removerTarefaID(tarefa: Tarefa){
    const index = this.lista.tarefas.findIndex(res => res.id == tarefa.id)

    if(index > -1){
        this.lista.tarefas.splice(index, 1)
    }
  }

  alterarTarefa(tarefa: Tarefa) {
    const dialogRef = this.modal.open(AlterarTarefaModalComponent, {
      width: '400px',
      data: { id: tarefa.id, descricao: tarefa.descricao },
    });

    dialogRef.afterClosed().subscribe((result) => {

      this.tarefaService
        .alterarTarefa(tarefa)
        .subscribe(() => this.tarefaService.obterTodasTarefas());
    });
  }

  concluirTarefa(tarefa: Tarefa) {
    this.tarefaService
      .alterarTarefa(tarefa)
      .subscribe(() => this.tarefaService.obterTodasTarefas());
  }


}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TarefaService } from '../../../shared/tarefa.service';
import { Tarefa } from './tarefa.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../../../shared/modal-confirm/modal-confirm.component';
import { AlterarTarefaModalComponent } from './alterar-tarefa-modal/alterar-tarefa-modal.component';
import { Lista } from './tarefa-lista.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorInput } from 'src/app/shared/validator-input';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
})

export class TarefasComponent implements OnInit, OnDestroy {
  @Input() lista: Lista
  form: FormGroup;
  pesquisa: string;
  tarefasLista: Lista
  sub: Subscription

  constructor(
      private tarefaService: TarefaService,
      public modal: MatDialog,
      private fb: FormBuilder,
      private toastr: ToastrService
      ) {}

  ngOnInit() {
    this.sub = this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)

    this.form = this.fb.group({
      nomeTarefa: this.fb.control('', ValidatorInput),
    });

  }

  adicionarTarefa() {
    let tarefa = new Tarefa(this.form.get('nomeTarefa').value);
    this.lista.tarefas.push(tarefa)

    this.sub = this.tarefaService.updateLista(this.lista).subscribe(() => {
        this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)
        this.toastr.success('Tarefa Adicionada com sucesso')
    })
    this.form.get('nomeTarefa').reset();
  }

  arrastarSoltarTarefa(evento: CdkDragDrop<any>) {
    moveItemInArray(evento.container.data, evento.previousIndex, evento.currentIndex);
  }

  concluirTarefa(tarefa: Tarefa) {
    const index = this.lista.tarefas.findIndex(res => res.id === tarefa.id)
    this.lista.tarefas[index].concluido = tarefa.concluido

    this.sub = this.tarefaService.updateLista(this.lista).subscribe(() => {
        this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)
        this.toastr.success('Tarefa concluida com sucesso 👏')
    })
  }

  removerTarefaModal(tarefa: Tarefa) {
    const dialogRef = this.modal.open(ModalConfirmComponent, {
      width: '400px',
    });

    dialogRef.componentInstance.configure('Deseja mesmo excluir a tarefa?')
    dialogRef.afterClosed().subscribe(() => {
        this.removerTarefaIndex(tarefa)

        this.sub = this.tarefaService.updateLista(this.lista).subscribe(() => {
            this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)
            this.toastr.success('Tarefa removida com sucesso')
        })
    })
  }

  removerTarefaIndex(tarefa: Tarefa){
    const index = this.lista.tarefas.findIndex(res => res.id == tarefa.id)

    if(index > -1){
        this.lista.tarefas.splice(index, 1)
    }
  }

  alterarTarefaModal(tarefaAlterada: Tarefa) {
    const dialogRef = this.modal.open(AlterarTarefaModalComponent, {
      width: '400px',
      data: { id: tarefaAlterada.id, descricao: tarefaAlterada.descricao, concluido: tarefaAlterada.concluido },
    });

    dialogRef.afterClosed().subscribe((tarefaAtual) => {
        this.alterarTarefaIndex(tarefaAlterada, tarefaAtual)

        this.sub = this.tarefaService.updateLista(this.lista).subscribe(() => {
            this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)
            this.toastr.success('Tarefa atualizada com sucesso 👏')
        })
    });
  }

  alterarTarefaIndex(tarefaAlterada: Tarefa, tarefaAtual: Tarefa){
    const index = this.lista.tarefas.findIndex(res => res.id == tarefaAlterada.id)
    this.lista.tarefas[index].descricao = tarefaAtual.descricao
  }

   ngOnDestroy(): void {
       this.sub.unsubscribe()
    }
}

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
import { MatCheckboxChange } from '@angular/material/checkbox';
import { PesquisaService } from '../../pesquisa/pesquisa.service';

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
    this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)

    //  this.servicoPesquisa.novaPesquisa.subscribe(pesquisa => this.pesquisa = pesquisa)

    this.form = this.fb.group({
      nomeTarefa: this.fb.control('', ValidatorInput),
    });

  }

  adicionarTarefa() {
    let tarefa = new Tarefa(this.form.get('nomeTarefa').value);
    this.lista.tarefas.push(tarefa)

    this.tarefaService.updateLista(this.lista).subscribe(() => {
        this.tarefaService.getListaId(this.lista.id).subscribe(r => this.tarefasLista = r)
        this.toastr.success('Tarefa Adicionada com sucesso')
    })

    this.form.get('nomeTarefa').reset();
  }

  dragAndDropTarefa(event: CdkDragDrop<any>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  removerTarefa(tarefa: Tarefa) {
    const dialogRef = this.modal.open(ModalConfirmComponent, {
      width: '400px',
    });

    dialogRef.componentInstance.configure('Deseja mesmo excluir a tarefa?')
    dialogRef.afterClosed().subscribe(() => {
        this.removerTarefaId(tarefa)

        this.tarefaService.updateLista(this.lista).subscribe(() => {
            this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)
            this.toastr.success('Tarefa removida com sucesso')
        })
    })
  }

  removerTarefaId(tarefa: Tarefa){
    const index = this.lista.tarefas.findIndex(res => res.id == tarefa.id)

    if(index > -1){
        this.lista.tarefas.splice(index, 1)
    }
  }

  alterarTarefa(tarefaSelecionada: Tarefa) {
    const dialogRef = this.modal.open(AlterarTarefaModalComponent, {
      width: '400px',
      data: { id: tarefaSelecionada.id, descricao: tarefaSelecionada.descricao, concluido: tarefaSelecionada.concluido },
    });

    dialogRef.afterClosed().subscribe((dadosTarefaAtual) => {
        this.alterarTarefaId(tarefaSelecionada, dadosTarefaAtual)

        this.tarefaService.updateLista(this.lista).subscribe(() => {
            this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)
            this.toastr.success('Tarefa atualizada com sucesso 👏')
        })
    });
  }

  alterarTarefaId(tarefaSelecionada: Tarefa, dadosTarefaAtual: Tarefa){
    const index = this.lista.tarefas.findIndex(res => res.id == tarefaSelecionada.id)
    this.lista.tarefas[index].descricao = dadosTarefaAtual.descricao
  }

  concluirTarefa(tarefa: Tarefa) {
    const index = this.lista.tarefas.findIndex(res => res.id === tarefa.id)
    this.lista.tarefas[index].concluido = tarefa.concluido

    this.tarefaService.updateLista(this.lista).subscribe(() => {
        this.tarefaService.getListaId(this.lista.id).subscribe(res => this.tarefasLista = res)
        this.toastr.success('Tarefa concluida com sucesso 👏')
    })
  }

}

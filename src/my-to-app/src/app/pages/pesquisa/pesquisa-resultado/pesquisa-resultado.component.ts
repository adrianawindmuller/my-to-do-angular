import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Tarefa } from 'src/app/pages/home/tarefas/tarefa.model';
import { TarefaService } from '../../../shared/tarefa.service';
import { PesquisaService } from '../pesquisa.service';
import { Lista } from '../../home/tarefas/tarefa-lista.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/shared/modal-confirm/modal-confirm.component';
import { ToastrService } from 'ngx-toastr';
import { AlterarTarefaModalComponent } from '../../home/tarefas/alterar-tarefa-modal/alterar-tarefa-modal.component';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa-resultado.component.html',
  styleUrls: ['pesquisa-resultado.component.css']
})
export class PesquisaResultadoComponent implements OnInit, OnDestroy {
    listas: Lista[]
    pesquisa: string
    sub: Subscription
    constructor(
        private tarefaService: TarefaService,
        private servicoPesquisa: PesquisaService,
        public modal: MatDialog,
        private toastr: ToastrService
        ) {}

    ngOnInit(): void {
        this.sub = this.tarefaService.getListas().subscribe(result => this.listas = result)
        this.sub = this.servicoPesquisa.resultadoPesquisa$.subscribe( res => this.pesquisa = res)
    }

    concluirTarefa(lista: Lista, tarefa: Tarefa) {
    const index = lista.tarefas.findIndex(res => res.id === tarefa.id)
    lista.tarefas[index].concluido = tarefa.concluido

    this.sub = this.tarefaService.updateLista(lista).subscribe(() => {
        this.tarefaService.getListaId(lista.id).subscribe(res => lista = res)
        this.toastr.success('Tarefa concluida com sucesso 👏')
    })
  }


  removerTarefaModal(lista: Lista, tarefa: Tarefa) {
    const dialogRef = this.modal.open(ModalConfirmComponent, {
      width: '400px',
    });

    dialogRef.componentInstance.configure('Deseja mesmo excluir a tarefa?')
    dialogRef.afterClosed().subscribe(() => {
        this.removerTarefaIndex(lista, tarefa)

        this.sub = this.tarefaService.updateLista(lista).subscribe(() => {
            this.tarefaService.getListaId(lista.id).subscribe(res => lista = res)
            this.toastr.success('Tarefa removida com sucesso')
        })
    })
  }

  removerTarefaIndex(lista: Lista, tarefa: Tarefa){
    const index = lista.tarefas.findIndex(res => res.id == tarefa.id)

    if(index > -1){
        lista.tarefas.splice(index, 1)
    }
  }


  alterarTarefaModal(lista: Lista,tarefaAlterada: Tarefa) {
    const dialogRef = this.modal.open(AlterarTarefaModalComponent, {
      width: '400px',
      data: { id: tarefaAlterada.id, descricao: tarefaAlterada.descricao, concluido: tarefaAlterada.concluido },
    });

    dialogRef.afterClosed().subscribe((tarefaAtual) => {
        this.alterarTarefaIndex(lista, tarefaAlterada, tarefaAtual)

        this.sub = this.tarefaService.updateLista(lista).subscribe(() => {
            this.tarefaService.getListaId(lista.id).subscribe(res => lista = res)
            this.toastr.success('Tarefa atualizada com sucesso 👏')
        })
    });
  }

  alterarTarefaIndex(lista: Lista, tarefaAlterada: Tarefa, tarefaAtual: Tarefa){
    const index = lista.tarefas.findIndex(res => res.id == tarefaAlterada.id)
    lista.tarefas[index].descricao = tarefaAtual.descricao
  }

  ngOnDestroy(): void {
       this.sub.unsubscribe()
    }
}

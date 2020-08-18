import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from 'src/app/pages/home/tarefa-container/tarefa.model';
import { TarefaService } from '../../../shared/tarefa.service';
import { PesquisaService } from '../pesquisa.service';
import { Lista } from '../../home/tarefa-container/tarefa-lista.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/shared/modal-confirm/modal-confirm.component';
import { ToastrService } from 'ngx-toastr';
import { AlterarTarefaModalComponent } from '../../home/tarefa-container/alterar-tarefa-modal/alterar-tarefa-modal.component';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa-resultado.component.html',
  styleUrls: ['pesquisa-resultado.component.css']
})
export class PesquisaResultadoComponent implements OnInit {
    listas: Lista[]
    pesquisa: string

    constructor(private tarefaService: TarefaService, private servicoPesquisa: PesquisaService, public modal: MatDialog, private toastr: ToastrService) {}

    ngOnInit(): void {
    this.tarefaService.getListas().subscribe(result => this.listas = result)
        this.servicoPesquisa.novaPesquisa.subscribe(pesquisa => this.pesquisa = pesquisa)
    }

    concluirTarefa(lista: Lista, tarefa: Tarefa) {
    const index = lista.tarefas.findIndex(res => res.id === tarefa.id)
    lista.tarefas[index].concluido = tarefa.concluido

    this.tarefaService.updateLista(lista).subscribe(() => {
        this.tarefaService.getListaId(lista.id).subscribe(res => lista = res)
        this.toastr.success('Tarefa concluida com sucesso 👏')
    })
  }


  removerTarefa(lista: Lista, tarefa: Tarefa) {
    const dialogRef = this.modal.open(ModalConfirmComponent, {
      width: '400px',
    });

    dialogRef.componentInstance.configure('Deseja mesmo excluir a tarefa?')
    dialogRef.afterClosed().subscribe(() => {
        this.removerTarefaId(lista, tarefa)

        this.tarefaService.updateLista(lista).subscribe(() => {
            this.tarefaService.getListaId(lista.id).subscribe(res => lista = res)
            this.toastr.success('Tarefa removida com sucesso')
        })
    })
  }

  removerTarefaId(lista: Lista, tarefa: Tarefa){
    const index = lista.tarefas.findIndex(res => res.id == tarefa.id)

    if(index > -1){
        lista.tarefas.splice(index, 1)
    }
  }


  alterarTarefa(lista: Lista,tarefaSelect: Tarefa) {
    const dialogRef = this.modal.open(AlterarTarefaModalComponent, {
      width: '400px',
      data: { id: tarefaSelect.id, descricao: tarefaSelect.descricao, concluido: tarefaSelect.concluido },
    });

    dialogRef.afterClosed().subscribe((tarefaAtual) => {
        this.alterarTarefaId(lista, tarefaSelect, tarefaAtual)

        this.tarefaService.updateLista(lista).subscribe(() => {
            this.tarefaService.getListaId(lista.id).subscribe(res => lista = res)
            this.toastr.success('Tarefa atualizada com sucesso 👏')
        })
    });
  }

  alterarTarefaId(lista: Lista, tarefaSelect: Tarefa, tarefaAtual: Tarefa){
    const index = lista.tarefas.findIndex(res => res.id == tarefaSelect.id)
    lista.tarefas[index].descricao = tarefaAtual.descricao
  }



}

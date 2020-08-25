import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorInput } from 'src/app/shared/validator-input';
import { Lista } from './tarefas/tarefa-lista.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/shared/modal-confirm/modal-confirm.component';
import { TarefaService } from 'src/app/shared/tarefa.service';
import { Subscription } from 'rxjs';
import { ModalEditComponent } from 'src/app/shared/modal-edit/modal-edit.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    listas: Lista[]
    form: FormGroup
    sub: Subscription

  constructor(
      private fb: FormBuilder,
      private tarefaService:TarefaService,
      public modal: MatDialog,
      public toastr: ToastrService
      ) {}

  ngOnInit(): void {
      this.sub = this.tarefaService.getListas().subscribe(result => this.listas = result)

      this.form = this.fb.group({
          nome: ['', ValidatorInput]
      })
  }

  adiconarLista() {
   if(this.form.invalid){
       return
   }
   let lista = new Lista(this.form.get('nome').value)

   this.sub = this.tarefaService.addLista(lista).subscribe(() => {
        this.tarefaService.getListas().subscribe(res => this.listas = res)
   })
    this.form.reset()
  }

  removerLista(lista: Lista){
     const dialogRef = this.modal.open(ModalConfirmComponent, {
      width: '400px',
    });

    dialogRef.componentInstance.configure('Deseja mesmo excluir a lista?')
    dialogRef.afterClosed().subscribe((excluir) => {
      if (excluir) {
        this.removerListaIndex(lista)

          this.sub = this.tarefaService.deleteLista(lista.id)
                .subscribe(() => this.tarefaService.getListaId(lista.id)
                    .subscribe(res => lista = res))
                    this.toastr.success('Lista removida com sucesso')

      }
    });
  }


  removerListaIndex(lista: Lista){
    const index = this.listas.findIndex(res => res.id == lista.id)

    if(index > -1){
        this.listas.splice(index, 1)
    }
  }


  alterarLista(lista: Lista){
    const dialogRef = this.modal.open(ModalEditComponent, {
        width: '400px',
        data: { id: lista.id, nome: lista.nome, tarefas: lista.tarefas },
      });

      dialogRef.componentInstance.configureTitle('Editar Lista')
      dialogRef.afterClosed().subscribe((listaAtual) => {
          if(listaAtual){
                this.alterarListaIndex(lista, listaAtual)

                this.sub = this.tarefaService.updateLista(lista).subscribe(() => {
                    this.tarefaService.getListaId(lista.id).subscribe(res => lista = res)
                    this.toastr.success('Lista Atualizada com sucesso 👏')
                })
        }
      });
  }

    alterarListaIndex(lista: Lista, listaAtual: Lista){
    const index = this.listas.findIndex(res => res.id == lista.id)
    this.listas[index].nome = listaAtual.nome
  }


 ngOnDestroy(): void {
       this.sub.unsubscribe()
    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidatorInput } from 'src/app/shared/validator-input';
import { Lista } from './tarefas/tarefa-lista.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/shared/modal-confirm/modal-confirm.component';
import { TarefaService } from 'src/app/shared/tarefa.service';
import { Subscription } from 'rxjs';

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
      public modal: MatDialog
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
    dialogRef.afterClosed().subscribe((excluir) => {
      if (excluir) {
          this.sub = this.tarefaService.deleteLista(lista.id)
                .subscribe(() => this.tarefaService.getListas()
                    .subscribe(res => this.listas = res))
      }
    });
    dialogRef.componentInstance.configure('Deseja mesmo excluir a lista?')
  }


 ngOnDestroy(): void {
       this.sub.unsubscribe()
    }
}

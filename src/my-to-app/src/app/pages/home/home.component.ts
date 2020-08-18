import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorInput } from 'src/app/shared/validator-input';
import { Lista } from './tarefa-container/tarefa-lista.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/shared/modal-confirm/modal-confirm.component';
import { TarefaService } from 'src/app/shared/tarefa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    listas: Lista[]
    form: FormGroup

  constructor(private fb: FormBuilder, private tarefaService:TarefaService, public modal: MatDialog ) {}

  ngOnInit(): void {
      this.tarefaService.getListas().subscribe(result => this.listas = result)

      this.form = this.fb.group({
          nome: ['', ValidatorInput]
      })
  }

  adiconarLista() {
   if(this.form.invalid){
       return
   }
   let lista = new Lista(this.form.get('nome').value)

   this.tarefaService.addLista(lista).subscribe(() => {
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
        this.tarefaService.deleteLista(lista.id)
        .subscribe(r => this.tarefaService.getListas()
            .subscribe(r => this.listas = r))
      }
    });

    dialogRef.componentInstance.configure('Deseja mesmo excluir a lista?')
  }
}

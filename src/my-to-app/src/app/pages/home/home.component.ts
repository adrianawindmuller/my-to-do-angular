import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorInput } from 'src/app/shared/validator-input';
import { ListaService } from 'src/app/shared/lista.service';
import { Lista } from './tarefa-container/lista.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from 'src/app/shared/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    novaLista: Lista[]

    form: FormGroup

  constructor(private fb: FormBuilder, private listaService:ListaService, public modal: MatDialog ) {}

  ngOnInit(): void {
      this.listaService.getLista().subscribe(result => this.novaLista = result)
      this.form = this.fb.group({
          nome: ['', ValidatorInput]
      })
  }

  adiconarLista(){
   if(this.form.invalid){
       return
   }
   const newLista = this.form.value
   this.listaService.adicionarLista(newLista)
        .subscribe(r => this.listaService.getLista()
            .subscribe(r=> this.novaLista = r))

    this.form.reset()
  }

  removerLista(lista: Lista){
     const dialogRef = this.modal.open(ModalConfirmComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((excluir) => {
      if (excluir) {
        this.listaService.deletarLista(lista.id)
        .subscribe(r => this.listaService.getLista()
            .subscribe(r => this.novaLista = r))
      }
    });

    dialogRef.componentInstance.configure('Deseja mesmo excluir a lista?')

  }
}

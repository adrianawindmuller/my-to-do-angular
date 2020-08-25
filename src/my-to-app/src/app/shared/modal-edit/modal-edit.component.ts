import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TarefasComponent } from '../../pages/home/tarefas/tarefas.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'modal-edit',
  templateUrl: './modal-edit.component.html',
})
export class ModalEditComponent implements OnInit {
    tituloLabel: string
    form: FormGroup;

    constructor(
    public dialogRef: MatDialogRef<TarefasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeTarefa: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  configureTitle(title: string){
    this.tituloLabel = title
  }


}

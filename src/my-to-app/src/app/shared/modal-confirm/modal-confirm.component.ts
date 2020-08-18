import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-confirm.component.html',
})
export class ModalConfirmComponent implements OnInit {
    confirmMessage: string

  constructor(public dialogRef: MatDialogRef<ModalConfirmComponent>) {}

  ngOnInit(): void {}

    configure(confirmMessage: string){
        this.confirmMessage = confirmMessage
    }
}

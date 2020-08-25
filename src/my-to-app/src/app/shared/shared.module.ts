import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialogModule } from '@angular/material/dialog';
import { MySearchPipe } from './pipes/my-search.pipe';
import { HttpClientModule } from '@angular/common/http';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop'
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import {ModalEditComponent} from './modal-edit/modal-edit.component'

@NgModule({
  declarations: [MySearchPipe, ModalConfirmComponent,ModalEditComponent],
  imports: [
      CommonModule, BrowserModule, BrowserAnimationsModule,
      HttpClientModule, MatButtonModule, MatDialogModule, FlexLayoutModule,
      ReactiveFormsModule,MatInputModule,
    ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule,
    ScrollingModule,
    MatMenuModule,
    AppRoutingModule,
    DragDropModule,

    MySearchPipe,
    ModalConfirmComponent,
    ModalEditComponent
  ],

})
export class SharedModule {}

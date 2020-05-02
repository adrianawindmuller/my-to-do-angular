import { Component, OnInit, Input } from '@angular/core';
import {SharedModule} from '../../shared/shared.module'
import { Tarefa } from '../tarefa.model';


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

@Input() tarefa : Tarefa

  constructor() { }

  ngOnInit(): void {
  }

}

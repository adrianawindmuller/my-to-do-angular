import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from 'src/app/pages/home/tarefa-container/tarefa.model';
import { TarefaService } from '../../../shared/tarefa.service';
import { PesquisaService } from '../pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa-resultado.component.html',
  styleUrls: ['pesquisa-resultado.component.css']
})
export class PesquisaResultadoComponent implements OnInit {
    pesquisa: string
    tarefas: any

    constructor(private tarefaService: TarefaService, private servicoPesquisa: PesquisaService) { }

    ngOnInit(): void {

        this.tarefaService.getTarefas().subscribe( dados => this.tarefas = dados)

        this.servicoPesquisa.novaPesquisa.subscribe(pesquisa => this.pesquisa = pesquisa)

        // this.tarefas$ = this.tarefaService.tarefas;
        // this.tarefaService.obterTarefas();

    }




}

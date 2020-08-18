import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TarefaService } from '../../../shared/tarefa.service';
import { PesquisaService } from '../pesquisa.service';

@Component({
  selector: 'app-pesquisa-input',
  templateUrl: './pesquisa-input.component.html',
  styleUrls: ['./pesquisa-input.component.css']
})
export class PesquisaInputComponent implements AfterViewInit {
    pesquisa: string
    constructor(private route: Router, private servicoPesquisa: PesquisaService) { }
    @ViewChild('filter') filterRef: ElementRef

    ngAfterViewInit(){
        this.filterRef.nativeElement.focus()
    }

    limparPesquisa(pesquisa: string){
      this.servicoPesquisa.limparPesquisa(pesquisa)
        this.pesquisa = ""
        this.route.navigate(['home'])
    }

    inserirPesquisa(pesquisa: string) {
        this.servicoPesquisa.resultadoPesquisa(pesquisa);
    }
}

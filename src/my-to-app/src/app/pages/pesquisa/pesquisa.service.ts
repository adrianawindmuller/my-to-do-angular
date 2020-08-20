import { Injectable, Output, EventEmitter } from '@angular/core'
import { Subject } from 'rxjs'
import { Lista } from '../home/tarefas/tarefa-lista.model'

@Injectable({
  providedIn: 'root',
})
export class PesquisaService {

    private pesquisaTarefa = new Subject<string>()
    resultadoPesquisa$ = this.pesquisaTarefa.asObservable() 

    novapesquisa(pesquisa: string){
        this.pesquisaTarefa.next(pesquisa)
    }

    limparPesquisa(pesquisa: string){
        this.pesquisaTarefa.next(pesquisa = '')
    }
}

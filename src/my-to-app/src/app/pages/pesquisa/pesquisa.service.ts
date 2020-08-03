import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PesquisaService {

  @Output() novaPesquisa = new EventEmitter()

  resultadoPesquisa(pesquisa: string){
      this.novaPesquisa.emit(pesquisa)
  }

    limparPesquisa(pesquisa: string){
         this.novaPesquisa.emit(pesquisa = '')
    }
}

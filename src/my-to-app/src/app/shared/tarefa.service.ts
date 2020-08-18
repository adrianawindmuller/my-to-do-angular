import { Injectable } from '@angular/core';
import { Tarefa } from '../pages/home/tarefas/tarefa.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Lista } from '../pages/home/tarefas/tarefa-lista.model';
@Injectable({
  providedIn: 'root',
})

export class TarefaService {
   private API_lista ='http://localhost:3000/lista';

    constructor(private http: HttpClient) {}

  addLista(lista: Lista): Observable<Lista>{
      return this.http.post<Lista>(this.API_lista, lista)
  }

  deleteLista(id: string){
    return this.http.delete(`${this.API_lista}/${id}`)
  }

  updateLista(lista: Lista): Observable<Lista> {
      return this.http.put<Lista>(`${this.API_lista}/${lista.id}`, lista)
  }

  getListaId(id: string){
       return this.http.get<Lista>(`${this.API_lista}/${id}`)
  }

  getListas(){
    return this.http.get<Lista[]>(this.API_lista)
  }

  alterarTarefa(tarefa: Tarefa) {
    return this.http.put(`${this.API_lista}/${tarefa}/${tarefa.id}`, tarefa)
  }

}

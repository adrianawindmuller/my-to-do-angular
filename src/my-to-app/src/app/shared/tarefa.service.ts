import { Injectable } from '@angular/core';
import { Tarefa } from '../pages/home/tarefa-container/tarefa.model';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Lista } from '../pages/home/tarefa-container/lista.model';
@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private API_tarefa = 'http://localhost:3000/tarefa';


  private _tarefas = new BehaviorSubject<Tarefa[]>([]);

  constructor(private http: HttpClient) {}

  adicionarTarefa(tarefa: Tarefa): Observable<Tarefa[]> {
    return this.http.post<Tarefa[]>(this.API_tarefa, tarefa);
  }

  get tarefas() {
    return this._tarefas.asObservable();
  }

  obterTarefas(concluido?: boolean): Subscription {
    let url =
      concluido == undefined // ()
        ? this.API_tarefa // if
        : `${this.API_tarefa}?concluido=${concluido}`; //false

    return this.http
      .get<Tarefa[]>(url)
      .subscribe((result) => this._tarefas.next(result));
  }

  removerTarefa(id: string) {
    return this.http.delete(`${this.API_tarefa}/${id}`);
  }

  alterarTarefa(tarefa: Tarefa) {
    return this.http.put(`${this.API_tarefa}/${tarefa.id}`, tarefa)
  }


  getTarefas(){
      return this.http.get<Tarefa[]>(this.API_tarefa)
  }

}

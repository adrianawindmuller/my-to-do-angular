import { Injectable } from '@angular/core';
import { Tarefa } from '../tarefa-container/tarefa.model';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, BehaviorSubject, Subscription } from 'rxjs';
import { delay, tap, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private API = 'http://localhost:3000/tarefa';

  private _tarefas = new BehaviorSubject<Tarefa[]>([]);

  constructor(private http: HttpClient) {}

  adicionarTarefa(tarefa: Tarefa): Observable<Tarefa[]> {
    return this.http.post<Tarefa[]>(this.API, tarefa);
  }

  get tarefas() {
    return this._tarefas.asObservable();
  }

  obterTarefas(): Subscription {
    return this.http
      .get<Tarefa[]>(this.API)
      .subscribe((result) => this._tarefas.next(result));
  }

  removerTarefa(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }

  alterarTarefa(tarefa: Tarefa) {
    return this.http.put(`${this.API}/${tarefa.id}`, {
      descricao: tarefa.descricao,
      concluido: tarefa.concluido,
    });
  }

  trazerTarefas() {
    return this.http.get<Tarefa>(`${this.API}`);
  }
}

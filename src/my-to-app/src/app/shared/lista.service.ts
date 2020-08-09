import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lista } from '../pages/home/tarefa-container/lista.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private API_lista ='http://localhost:3000/lista';

  constructor(private http: HttpClient) { }

  adicionarLista(lista: Lista): Observable<Lista[]>{
      return this.http.post<Lista[]>(this.API_lista, lista)
  }

  getLista(){
    return this.http.get<Lista[]>(this.API_lista)
  }

  deletarLista(id: string){
    return this.http.delete(`${this.API_lista}/${id}`)
  }


}

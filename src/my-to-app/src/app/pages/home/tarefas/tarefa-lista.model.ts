import { Tarefa } from './tarefa.model'
import { identifierModuleUrl } from '@angular/compiler'

export class Lista {
    id: string
    tarefas: Tarefa[] = []

   constructor(public nome: string) {
   }
}


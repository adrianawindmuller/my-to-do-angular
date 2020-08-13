export class Tarefa {
  id: string;
  concluido: boolean = false

  constructor(public descricao: string) {
      this.id = Math.random().toString(36).substring(2, 15);
  }
}

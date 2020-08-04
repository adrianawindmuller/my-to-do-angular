import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

    estaAutenticado(email: string, senha: string): boolean{
        return (email === 'demo@gmail.com' && senha == 'xf563a7s')
    }
}

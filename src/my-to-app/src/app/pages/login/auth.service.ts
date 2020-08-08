import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authenticated: boolean

  constructor() { }

    isAuthenticated(email?: string, senha?: string): boolean{
        if (email === 'teste@gmail.com' && senha == 'teste'){
            this.authenticated = true
            localStorage.setItem('authenticated',JSON.stringify(email))
            localStorage.setItem('authenticated',JSON.stringify(senha))
        }
        return this.authenticated
    }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authenticated: boolean

  constructor() { }

    isAuthenticated(email?: string, senha?: string): boolean{
        if (email === 'demo@gmail.com' && senha == 'xf563a7s'){
            this.authenticated = true
        }
        return this.authenticated
    }
}

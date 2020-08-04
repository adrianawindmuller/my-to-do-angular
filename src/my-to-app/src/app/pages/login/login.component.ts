import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide = true;
    loginForm: FormGroup

  constructor(private fb: FormBuilder, private auth: AuthService, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
          email: ['', Validators.required],
          senha: ['', Validators.required],
      })
  }

  login(){
      if(this.loginForm.valid){
          const email = this.loginForm.get('email').value
          const senha = this.loginForm.get('senha').value
        if(this.auth.estaAutenticado(email, senha) == true){
            this.route.navigate(['home'])
        }else{
            this.toastr.error('O e-mail ou a senha estão incorretos','',{
                progressBar: true
            })
            this.loginForm.reset()
        }
        return
      }

  }

}

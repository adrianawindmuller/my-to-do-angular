import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    pesquisa: boolean
    constructor( private route: Router) {}

    ngOnInit(): void {}

    routearParaPesquisa(){
        if(this.route.url != '/pesquisa'){
            this.route.navigate(['pesquisa'])
        }
    }

    togglePesquisa(){
        this.pesquisa = !this.pesquisa
    }

}

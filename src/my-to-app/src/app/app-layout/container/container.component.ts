import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/login/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit {
    isLogin: boolean

    constructor( private route: Router ) {
        this.route.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (event.url === '/login' || event.url == '/') {
                this.isLogin= false;
                } else {
                this.isLogin= true;
                }
            }
            });
    }

  ngOnInit(): void {
  }


}

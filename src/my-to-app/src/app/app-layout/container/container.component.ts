import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/login/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styles: [
    `
      .body {
        display: block;
        position: relative;
      }

      .body::after {
        content: '';
        background: url('../../../assets/flores.png') center;
        opacity: 0.6;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }
    `,
  ],
})
export class ContainerComponent implements OnInit {
    isLogin: boolean

    constructor( private route: Router ) {
        this.route.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (event.url === '/login') {
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

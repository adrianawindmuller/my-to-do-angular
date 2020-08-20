import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/pages/login/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit, OnDestroy {
    isLogin: boolean
    sub: Subscription

    constructor( private route: Router ) {
        this.sub =  this.route.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                if (event.url === '/login' || event.url == '/') {
                this.isLogin= false;
                } else {
                this.isLogin= true;
                }
            }
            });
    }

    ngOnDestroy(): void {
       this.sub.unsubscribe()
    }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}

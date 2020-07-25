import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      footer {
        background-color: #f5f5f5;
        color:  rgb(77, 77, 77);
        border-top: 1px solid rgb(212 211 211)
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

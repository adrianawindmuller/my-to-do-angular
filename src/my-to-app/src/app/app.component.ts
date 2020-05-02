import { Component } from '@angular/core';
import {SharedModule} from './shared/shared.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-to-app';
}

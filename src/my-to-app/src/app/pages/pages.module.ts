import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, AppModule],
  exports: [HomeComponent],
})
export class PagesModules {}

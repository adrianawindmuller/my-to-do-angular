import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { MainComponent } from './main/main.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ContainerComponent, MainComponent],
  imports: [SharedModule, RouterModule],
  exports: [ContainerComponent],
})
export class AppLayoutModule {}

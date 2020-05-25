import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TarefaService } from './shared/tarefa.service';
import { AppLayoutModule } from './app-layout/app-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, AppLayoutModule],
  exports: [],
  providers: [TarefaService],
  bootstrap: [AppComponent],
})
export class AppModule {}

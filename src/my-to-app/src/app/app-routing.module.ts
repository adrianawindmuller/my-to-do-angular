import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PesquisaResultadoComponent } from './pages/pesquisa/pesquisa-resultado/pesquisa-resultado.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full',},
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  {path: 'pesquisa', component: PesquisaResultadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

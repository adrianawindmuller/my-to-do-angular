import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PesquisaResultadoComponent } from './pages/pesquisa/pesquisa-resultado/pesquisa-resultado.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full',},
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  {path: 'pesquisa', component: PesquisaResultadoComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

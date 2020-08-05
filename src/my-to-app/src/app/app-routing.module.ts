import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PesquisaResultadoComponent } from './pages/pesquisa/pesquisa-resultado/pesquisa-resultado.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './pages/login/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'sobre', component: AboutComponent, canActivate: [AuthGuard] },
  {path: 'pesquisa', component: PesquisaResultadoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

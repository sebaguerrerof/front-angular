import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HacerComponent } from './pages/transferencias/hacer/hacer.component';
import { HomeUsuarioComponent } from './pages/transferencias/home-usuario/home-usuario.component';
import { NuevoDestinatarioComponent } from './pages/transferencias/nuevo-destinatario/nuevo-destinatario.component';
import { VerComponent } from './pages/transferencias/ver/ver.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/home-usuario', component: HomeUsuarioComponent },
  { path: 'user/ver-transferencias', component: VerComponent },
  { path: 'user/nuevo-destinatario', component: NuevoDestinatarioComponent },
  { path: 'user/hacer', component: HacerComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

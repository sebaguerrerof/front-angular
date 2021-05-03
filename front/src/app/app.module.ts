import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HacerComponent } from './pages/transferencias/hacer/hacer.component';
import { VerComponent } from './pages/transferencias/ver/ver.component';
import { HomeUsuarioComponent } from './pages/transferencias/home-usuario/home-usuario.component';
import { NuevoDestinatarioComponent } from './pages/transferencias/nuevo-destinatario/nuevo-destinatario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HacerComponent,
    VerComponent,
    HomeUsuarioComponent,
    NuevoDestinatarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

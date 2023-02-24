import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfosClientComponent } from './infos-client/infos-client.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AjouterPanierComponent } from './ajouter-panier/ajouter-panier.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionClientEditComponent } from './gestion-client-edit/gestion-client-edit.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoixProduitsComponent,
    InfosClientComponent,
    ClientEditComponent,
    AfficherProduitComponent,
    AuthentificationComponent,
    LoginComponent,
    SignupComponent,
    ProfilComponent,
    ResetPasswordComponent,

    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AjouterPanierComponent,
    GestionClientComponent,
    GestionClientEditComponent,
    AdminComponent,
    AdminNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

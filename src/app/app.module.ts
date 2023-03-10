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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AfficherPanierComponent } from './afficher-panier/afficher-panier.component';
import { ValiderCommandeComponent } from './valider-commande/valider-commande.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { GestionProduitEditComponent } from './gestion-produit-edit/gestion-produit-edit.component';
import { ContactComponent } from './contact/contact.component';
import { AdminCommandeComponent } from './admin-commande/admin-commande.component';
import { AdminCommandeIdComponent } from './admin-commande-id/admin-commande-id.component';
import { ClientAfficherCommandesComponent } from './client-afficher-commandes/client-afficher-commandes.component';
import { GestionCategoriesComponent } from './gestion-categories/gestion-categories.component';
import { GestionCategoriesEditComponent } from './gestion-categories-edit/gestion-categories-edit.component';

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
    AfficherPanierComponent,
    ValiderCommandeComponent,
    AdminLoginComponent,
    AfficherPanierComponent,
    GestionClientComponent,
    GestionClientEditComponent,
    AdminComponent,
    AdminNavbarComponent,
    AdminLoginComponent,
    AfficherPanierComponent,
    AProposComponent,
    GestionProduitComponent,
    GestionProduitEditComponent,
    ContactComponent,
    AdminCommandeComponent,
    AdminCommandeIdComponent,
    ClientAfficherCommandesComponent,
    GestionCategoriesComponent,
    GestionCategoriesEditComponent,
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

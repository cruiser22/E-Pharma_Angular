import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';
import { HomeComponent } from './home/home.component';
import { InfosClientComponent } from './infos-client/infos-client.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AjouterPanierComponent } from './ajouter-panier/ajouter-panier.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AfficherPanierComponent } from './afficher-panier/afficher-panier.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ChoixProduitsComponent },
  { path: 'profil', component: ClientEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'afficherproduit', component: AfficherProduitComponent },
  { path: 'ajouterpanier', component: AjouterPanierComponent },
  { path: 'afficherpanier', component: AfficherPanierComponent },
  { path: 'shop/:id', component: AfficherProduitComponent },
  { path: 'reset', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

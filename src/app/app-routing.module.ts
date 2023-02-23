import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';
import { HomeComponent } from './home/home.component';
import { InfosClientComponent } from './infos-client/infos-client.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ChoixProduitsComponent },
  { path: 'profile', component: InfosClientComponent },
  { path: 'edit', component: ClientEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'afficherproduit', component: AfficherProduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

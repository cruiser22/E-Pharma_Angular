import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherProduitComponent } from './afficher-produit/afficher-produit.component';
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';
import { InfosClientComponent } from './infos-client/infos-client.component';

const routes: Routes = [
  { path: 'choixproduits', component: ChoixProduitsComponent },
  { path: 'infosclient', component: InfosClientComponent },
  { path: 'afficherproduit', component: AfficherProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';
import { InfosClientComponent } from './infos-client/infos-client.component';

const routes: Routes = [
  { path: 'choixproduits', component: ChoixProduitsComponent },
  { path: 'infosclient', component: InfosClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

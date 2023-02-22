import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';

const routes: Routes = [
  { path: 'choixproduits', component: ChoixProduitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

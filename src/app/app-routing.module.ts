import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AuthentificationComponent } from './authentification/authentification.component';


const routes: Routes = [

  { path: 'authentification', component: AuthentificationComponent }




=======
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';

const routes: Routes = [
  { path: 'choixproduits', component: ChoixProduitsComponent }
>>>>>>> bfe3d74c12cb78146a5f18ae45825aef80192474
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

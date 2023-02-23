import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';
import { InfosClientComponent } from './infos-client/infos-client.component';
<<<<<<< HEAD
import { ClientEditComponent } from './client-edit/client-edit.component';
=======
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';
>>>>>>> f243bf01dd7509d66c30f850178cc411ec9d5d71

const routes: Routes = [
  { path: 'choixproduits', component: ChoixProduitsComponent },
  { path: 'infosclient', component: InfosClientComponent },
<<<<<<< HEAD
  { path: 'edit', component: ClientEditComponent }
=======
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profil', component: ProfilComponent },
>>>>>>> f243bf01dd7509d66c30f850178cc411ec9d5d71
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

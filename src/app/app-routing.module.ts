import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoixProduitsComponent } from './choix-produits/choix-produits.component';
import { HomeComponent } from './home/home.component';
import { InfosClientComponent } from './infos-client/infos-client.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'choixproduits', component: ChoixProduitsComponent },
  { path: 'infosclient', component: InfosClientComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profil', component: ProfilComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

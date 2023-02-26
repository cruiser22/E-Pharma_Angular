import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produit } from '../produit';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-gestion-produit-edit',
  templateUrl: './gestion-produit-edit.component.html',
  styleUrls: ['./gestion-produit-edit.component.css'],
})
export class GestionProduitEditComponent {
  produit: Produit | any;
  nom: string;
  stateUpdate = { error: false, message: null };
  stateDelete = { error: false, message: null };

  constructor(
    private router: Router,
    private srv: SrvProduitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.getProduit(id);
  }

  async update(id) {
    try {
      this.srv.update(id, this.produit);
      this.stateUpdate.error = false;
      this.stateUpdate.message = 'Succes: Le Produit a bien ete ajoute.';
    } catch (error) {
      this.stateUpdate.error = true;
      this.stateUpdate.message = 'Une erreur est survenue.';
      console.log(error);
    }
  }

  async getProduit(id) {
    try {
      this.produit = await this.srv.getProduit(id);
      console.log(this.produit);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduit(id, nom, produit) {
    if (nom != produit.nom) {
      this.stateDelete.error = true;
      this.stateDelete.message = 'Le nom ne correspond pas. ';
      return;
    }
    try {
      await this.srv.delete(id);
      this.stateDelete.error = false;
      this.stateDelete.message = 'Le Produit a bien ete supprime. ';
      this.router.navigate(['/admin/produits']);
    } catch (error) {
      this.stateDelete.error = true;
      this.stateDelete.message = 'Une erreur est survenue. ';
      console.log(error);
    }
  }
}

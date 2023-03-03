import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categorie } from '../categorie';
import { Produit } from '../produit';
import { SrvCategorieService } from '../srv-categorie.service';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css'],
})
export class GestionProduitComponent {
  categories;
  produit = {
    id: null,
    nom: '',
    description: '',
    prix: null,
    categorie: new Categorie(),
  };
  produits: Produit[] | any;
  stateAdd = { error: false, message: '' };
  constructor(
    private srv: SrvProduitService,
    private categorieSrv: SrvCategorieService
  ) {}

  ngOnInit() {
    this.getProduit();
    this.getCategories();
  }

  async getProduit() {
    try {
      this.produits = await this.srv.getliste();
      console.log(this.produits);
    } catch (error) {
      console.log(error);
    }
  }

  async getCategories() {
    try {
      this.categories = await this.categorieSrv.getListe();
      console.log(this.categories);
    } catch (error) {
      console.log(error);
    }
  }

  async addProduit(produit) {
    console.log(produit);
    try {
      await this.srv.add(produit);
      this.produit = {
        id: null,
        nom: '',
        description: '',
        prix: null,
        categorie: new Categorie(),
      };
      this.getProduit();
    } catch (error) {
      console.log(error);
    }
  }
}

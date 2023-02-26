import { Component } from '@angular/core';
import { Produit } from '../produit';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css'],
})
export class GestionProduitComponent {
  produit = new Produit();
  produits: Produit[] | any;
  stateAdd = { error: false, message: '' };
  constructor(private srv: SrvProduitService) {}

  ngOnInit() {
    this.getProduit();
  }

  async getProduit() {
    try {
      this.produits = await this.srv.getliste();
    } catch (error) {
      console.log(error);
    }
  }

  async addProduit(produit) {
    console.log(produit);
    try {
      await this.srv.add(produit);
      this.produit = new Produit();
      this.getProduit();
    } catch (error) {
      console.log(error);
    }
  }
}

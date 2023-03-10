import { Component } from '@angular/core';
import { Ligne } from '../ligne';
import { environment } from 'src/environments/environment';
import { Produit } from '../produit';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-afficher-panier',
  templateUrl: './afficher-panier.component.html',
  styleUrls: ['./afficher-panier.component.css'],
})
export class AfficherPanierComponent {
  lignes: Array<Ligne> = [];
  produits = [];
  total = 0;
  imgUrl;

  constructor(private srv: SrvProduitService) {}

  ngOnInit(): void {
    this.imgUrl = `${environment.apiUrl}/image`;
    this.getPanier();
  }

  getPanier() {
    let str: string = sessionStorage.getItem('panier');
    this.total = 0;
    if (str != null) {
      this.produits = JSON.parse(str);
      for (let p of this.produits) {
        this.total += p.total;
      }
      // Format the total with 2 decimal places
      this.total = Number(this.total.toFixed(2));
    }
  }
  
  async ajouter(id, quantite) {
    await this.srv.ajouterPanier(id, quantite);
    this.getPanier();
    // Format the total with 2 decimal places after adding a product
    this.total = Number(this.total.toFixed(2));
  }

  async enlever(id, quantite) {
    await this.srv.enleverPanier(id, quantite);
    this.getPanier();
  }
}

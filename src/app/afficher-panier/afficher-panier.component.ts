import { Component } from '@angular/core';
<<<<<<< HEAD
import { Ligne } from '../ligne';
=======
import { environment } from 'src/environments/environment';
>>>>>>> 408cf162b4fd4d39eadb65ecea1d13cc5c95924e
import { Produit } from '../produit';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-afficher-panier',
  templateUrl: './afficher-panier.component.html',
  styleUrls: ['./afficher-panier.component.css'],
})
export class AfficherPanierComponent {
<<<<<<< HEAD
  lignes: Array<Ligne> = [];
=======
  produits = [];
  total = 0;
  imgUrl;
>>>>>>> 408cf162b4fd4d39eadb65ecea1d13cc5c95924e

  constructor(private srv: SrvProduitService) {}

  ngOnInit(): void {
    this.imgUrl = `${environment.apiUrl}/image`;
    this.getPanier();
  }

  getPanier() {
    let str: string = sessionStorage.getItem('panier');
    this.total = 0;
    if (str != null) {
<<<<<<< HEAD
      this.lignes = JSON.parse(str);
=======
      this.produits = JSON.parse(str);
      for (let p of this.produits) {
        this.total += p.total;
      }
>>>>>>> 408cf162b4fd4d39eadb65ecea1d13cc5c95924e
    }
  }

  async ajouter(id, quantite) {
    await this.srv.ajouterPanier(id, quantite);
    this.getPanier();
  }

  async enlever(id, quantite) {
    await this.srv.enleverPanier(id, quantite);
    this.getPanier();
  }
}

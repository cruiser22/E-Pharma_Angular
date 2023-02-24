import { Component } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-afficher-panier',
  templateUrl: './afficher-panier.component.html',
  styleUrls: ['./afficher-panier.component.css']
})
export class AfficherPanierComponent {
  produits: Array<Produit> = [];

  constructor() {}

  ngOnInit(): void {
    let str: string = sessionStorage.getItem("panier");
    if (str != null) {
      this.produits = JSON.parse(str);
    }
  }
}

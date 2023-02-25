import { Component } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-valider-commande',
  templateUrl: './valider-commande.component.html',
  styleUrls: ['./valider-commande.component.css']
})
export class ValiderCommandeComponent {
  produits: Array<Produit> = [];

  constructor() {}

  ngOnInit(): void {
    let str: string = sessionStorage.getItem("panier");
    if (str != null) {
      this.produits = JSON.parse(str);
    }
    for (let p of this.produits) {
      
    }
  }
}

import { Component } from '@angular/core';
import { Commande } from '../commande';
import { Ligne } from '../ligne';
import { Produit } from '../produit';

@Component({
  selector: 'app-valider-commande',
  templateUrl: './valider-commande.component.html',
  styleUrls: ['./valider-commande.component.css']
})
export class ValiderCommandeComponent {
  lignes: Array<Ligne> = [];

  constructor() {}

  ngOnInit(): void {
    let str: string = sessionStorage.getItem("panier");
    if (str != null) {
      this.lignes = JSON.parse(str);
    }
    let commande = new Commande;
    commande.lignes = this.lignes;
    //commande.
  }
}

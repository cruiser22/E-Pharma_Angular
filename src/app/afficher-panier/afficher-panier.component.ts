import { Component } from '@angular/core';
import { Ligne } from '../ligne';
import { Produit } from '../produit';

@Component({
  selector: 'app-afficher-panier',
  templateUrl: './afficher-panier.component.html',
  styleUrls: ['./afficher-panier.component.css']
})
export class AfficherPanierComponent {
  lignes: Array<Ligne> = [];

  constructor() {}

  ngOnInit(): void {
    let str: string = sessionStorage.getItem("panier");
    if (str != null) {
      this.lignes = JSON.parse(str);
    }
  }
}

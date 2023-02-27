import { Component } from '@angular/core';
import { Produit } from '../produit';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-ajouter-panier',
  templateUrl: './ajouter-panier.component.html',
  styleUrls: ['./ajouter-panier.component.css'],
})
export class AjouterPanierComponent {
  produits: Array<Produit> = [];
  liste: any;
  nvProduit: Produit;

  constructor(private srv: SrvProduitService) {}

  ngOnInit(): void {
    this.srv.getliste().then((x) => (this.liste = x));
    let str: string = sessionStorage.getItem('panier');
    if (str != null) {
      this.produits = JSON.parse(str);
    }
  }

  async ajouter(id: number) {
    console.log(id);
    this.nvProduit = await this.srv.getProduit(id);

    console.log(this.nvProduit);

    let str = JSON.stringify(this.nvProduit);
    console.log(str);

    this.produits.push(this.nvProduit);

    str = JSON.stringify(this.produits);
    console.log(str);
    sessionStorage.setItem('panier', str);
  }
}
import { Component } from '@angular/core';
import { Ligne } from '../ligne';
import { Produit } from '../produit';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-ajouter-panier',
  templateUrl: './ajouter-panier.component.html',
  styleUrls: ['./ajouter-panier.component.css'],
})
export class AjouterPanierComponent {
<<<<<<< HEAD
  lignes: Array<Ligne> = [];
  liste : any;
=======
  produits: Array<Produit> = [];
  liste: any;
  nvProduit: Produit;
>>>>>>> 408cf162b4fd4d39eadb65ecea1d13cc5c95924e

  constructor(private srv: SrvProduitService) {}

  ngOnInit(): void {
    this.srv.getliste().then((x) => (this.liste = x));
    let str: string = sessionStorage.getItem('panier');
    if (str != null) {
      this.lignes = JSON.parse(str);
    }
  }

  async ajouter(id: number) {
<<<<<<< HEAD
    let nvProduit = await this.srv.getProduit(id);
=======
    console.log(id);
    this.nvProduit = await this.srv.getProduit(id);
>>>>>>> 408cf162b4fd4d39eadb65ecea1d13cc5c95924e

    let exist: boolean = false;

<<<<<<< HEAD
    // Vérifier si produit existe dans liste Client
    for (let l of this.lignes) {
      if (l.produit.id == id) {
        exist = true;
        l.quantite++;
      }
    }
=======
    let str = JSON.stringify(this.nvProduit);
    console.log(str);
>>>>>>> 408cf162b4fd4d39eadb65ecea1d13cc5c95924e

    // Si non-existant, le créer
    if (!exist) {
      let ligne = new Ligne;
      ligne.id = this.lignes.length + 1;
      ligne.produit = nvProduit;
      ligne.quantite = 1;
      this.lignes.push(ligne);
    }

<<<<<<< HEAD
    // Mis à jour du Panier
    let str =JSON.stringify(this.lignes);
    sessionStorage.setItem("panier",str);
=======
    str = JSON.stringify(this.produits);
    console.log(str);
    sessionStorage.setItem('panier', str);
>>>>>>> 408cf162b4fd4d39eadb65ecea1d13cc5c95924e
  }
}

import { Component } from '@angular/core';
import { Ligne } from '../ligne';
import { Produit } from '../produit';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-ajouter-panier',
  templateUrl: './ajouter-panier.component.html',
  styleUrls: ['./ajouter-panier.component.css']
})
export class AjouterPanierComponent {
  lignes: Array<Ligne> = [];
  liste : any;

  constructor(private srv: SrvProduitService) {}

  ngOnInit(): void {
    this.srv.getliste().then(x=>this.liste=x);
    let str: string = sessionStorage.getItem("panier");
    if (str != null) {
      this.lignes = JSON.parse(str);
    }
  }

  async ajouter(id: number) {
    let nvProduit = await this.srv.getProduit(id);

    let exist: boolean = false;

    // Vérifier si produit existe dans liste Client
    for (let l of this.lignes) {
      if (l.produit.id == id) {
        exist = true;
        l.quantite++;
      }
    }

    // Si non-existant, le créer
    if (!exist) {
      let ligne = new Ligne;
      ligne.produit = nvProduit;
      ligne.quantite = 1;
      this.lignes.push(ligne);
    }

    // Mis à jour du Panier
    let str =JSON.stringify(this.lignes);
    sessionStorage.setItem("panier",str);
  }
}

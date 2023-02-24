import { Component } from '@angular/core';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  produits: any[] = [];
  testimoniaux: any[] = [];
  constructor(private srv: SrvProduitService) {}

  ngOnInit() {
    this.getProduits();
    this.testimoniaux = [
      {
        nom: 'Dupont',
        prenom: 'Sophie',
        image: 'sophie.jpg',
        message:
          "Je suis très satisfaite de ePharma, j'ai pu commander mes médicaments en ligne sans aucun problème et ils sont arrivés rapidement chez moi.",
      },
      {
        nom: 'Martin',
        prenom: 'Lucas',
        image: 'lucas.jpg',
        message:
          "J'utilise les produits de ePharma depuis plusieurs mois et je n'ai jamais été déçu. La qualité est au rendez-vous et les prix sont compétitifs.",
      },
      {
        nom: 'Lefebvre',
        prenom: 'Alice',
        image: 'alice.jpg',
        message:
          "Je recommande ePharma à tous mes amis, c'est vraiment pratique et simple d'utilisation. En plus, le service client est très réactif en cas de question.",
      },
      {
        nom: 'Durand',
        prenom: 'Pierre',
        image: 'pierre.jpg',
        message:
          "Je suis un client fidèle de ePharma depuis plusieurs années maintenant. J'apprécie particulièrement la rapidité de livraison et la qualité des produits proposés.",
      },
    ];
  }

  async getProduits() {
    this.produits = await this.srv.getliste();
    this.produits = this.produits.slice(0, 3);
    console.log(this.produits);
  }
}

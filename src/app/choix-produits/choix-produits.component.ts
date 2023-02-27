import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produit } from '../produit';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-choix-produits',
  templateUrl: './choix-produits.component.html',
  styleUrls: ['./choix-produits.component.css'],
})
export class ChoixProduitsComponent {
  liste: any;
  imgUrl;
  filteredList: any;
  recherche = '';
  categories = [
    { id: 1, lib: 'Analgésique' },
    { id: 2, lib: 'Soin de la peau' },
    { id: 3, lib: 'Rhume et grippe' },
    { id: 4, lib: 'Anti-acide' },
    { id: 5, lib: 'Peau' },
    { id: 6, lib: 'Cheveux' },
    { id: 7, lib: 'Yeux' },
  ];

  constructor(private srv: SrvProduitService) {}

  ngOnInit(): void {
    this.getListe();
    this.imgUrl = `${environment.apiUrl}/image`;
  }

  async getListe() {
    this.liste = await this.srv.getliste().then((x) => (this.liste = x));
    this.filteredList = this.liste;
  }

  search(word) {
    this.filteredList = this.liste.filter((produit) => {
      return produit.nom.toLowerCase().includes(word.toLowerCase());
    });
  }

  async getListeByCategorie(categorie) {
    try {
      this.liste = await this.srv.getListeByCategorie(categorie);
      this.filteredList = this.liste;
    } catch (error) {
      console.log(error);
    }
  }
}

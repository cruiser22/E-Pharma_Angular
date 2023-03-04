import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categorie } from '../categorie';
import { Produit } from '../produit';
import { SrvCategorieService } from '../srv-categorie.service';
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
  categories;

  constructor(
    private srv: SrvProduitService,
    private srvCategories: SrvCategorieService
  ) {}

  ngOnInit(): void {
    this.getListe();
    this.getCategories();
    this.imgUrl = `${environment.apiUrl}/image`;
  }

  async getListe() {
    this.liste = await this.srv.getliste().then((x) => (this.liste = x));
    this.filteredList = this.liste;
  }

  async getCategories() {
    this.categories = await this.srvCategories.getListe();
    console.log(this.categories);
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

import { Component } from '@angular/core';
import { Categorie } from '../categorie';
import { SrvCategorieService } from '../srv-categorie.service';

@Component({
  selector: 'app-gestion-categories',
  templateUrl: './gestion-categories.component.html',
  styleUrls: ['./gestion-categories.component.css'],
})
export class GestionCategoriesComponent {
  categorie = new Categorie();
  stateAdd = { error: false, message: '' };
  categories: Categorie[] | any;
  constructor(private srv: SrvCategorieService) {}

  ngOnInit() {
    this.getCategorie();
  }

  async getCategorie() {
    try {
      this.categories = await this.srv.getListe();
      console.log(this.categories);
    } catch (error) {
      console.log(error);
    }
  }

  async addCategorie(categorie: Categorie) {
    const response = await this.srv.add(categorie);
    this.categorie = new Categorie();
    if (!response.error) {
      console.log(response);
      this.getCategorie();
      this.stateAdd = {
        error: false,
        message: 'Succes: La categorie a bien ete ajoutee.',
      };
    } else {
      this.stateAdd = {
        error: true,
        message: 'Une erreur est survenue',
      };
    }
  }
}

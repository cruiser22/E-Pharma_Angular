import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SrvCategorieService } from '../srv-categorie.service';

@Component({
  selector: 'app-gestion-categories-edit',
  templateUrl: './gestion-categories-edit.component.html',
  styleUrls: ['./gestion-categories-edit.component.css'],
})
export class GestionCategoriesEditComponent {
  categorie;
  nom: string;
  stateUpdate = { error: false, message: null };
  stateDelete = { error: false, message: null };

  constructor(
    private router: Router,
    private srv: SrvCategorieService,
    private categorieSrv: SrvCategorieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.getCategorie(id);
  }

  async update(id: number) {
    const response = await this.srv.update(id, this.categorie);
    console.log(this.stateUpdate);
    console.log(response);
    if (response.error) {
      this.stateUpdate.error = true;
      this.stateUpdate.message = 'Une erreur est survenue.';
    } else {
      this.stateUpdate.error = false;
      this.stateUpdate.message = 'Succes: la categorie a bien ete modifiee.';
      this.getCategorie(this.categorie.id);
    }
  }

  async getCategorie(id) {
    try {
      this.categorie = await this.srv.getCategorie(id);
      console.log(this.categorie);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCategorie(id, nom, categorie) {
    console.log(nom);
    console.log(categorie.name);
    if (nom != categorie.name) {
      this.stateDelete.error = true;
      this.stateDelete.message = 'Le nom ne correspond pas. ';
      return;
    }

    const response = await this.srv.delete(id);
    console.log(response);
    if (response.error) {
      console.log('error');
      this.stateDelete.error = true;
      this.stateDelete.message = 'Une erreur est survenue. ';
    } else {
      console.log('no error');
      this.stateDelete.error = false;
      this.stateDelete.message = 'La categorie a bien ete supprimee. ';
      this.router.navigate(['/admin/categories']);
    }
  }
}

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Categorie } from '../categorie';
import { Produit } from '../produit';
import { SrvCategorieService } from '../srv-categorie.service';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-gestion-produit-edit',
  templateUrl: './gestion-produit-edit.component.html',
  styleUrls: ['./gestion-produit-edit.component.css'],
})
export class GestionProduitEditComponent {
  categories;
  previewImageSrc;
  imgUrl = `${environment.apiUrl}/image`;
  produit;
  nom: string;
  stateUpdate = { error: false, message: null };
  stateDelete = { error: false, message: null };
  image;

  constructor(
    private router: Router,
    private srv: SrvProduitService,
    private categorieSrv: SrvCategorieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.getProduit(id);
    this.getCategories();
  }

  async getCategories() {
    this.categories = await this.categorieSrv.getListe();
  }

  async updateImage(id) {
    const formData = new FormData();
    formData.append('file', this.image);
    try {
      const imgResponse = await this.srv.upload(id, formData);
      console.log(imgResponse);
    } catch (error) {
      console.log(error);
    }
  }

  async onFileSelected(event) {
    console.log(event.target.files);
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Set the preview image source
        this.previewImageSrc = e.target.result;
      };
      reader.readAsDataURL(file);
      this.image = file;
    }
  }
  async update(id) {
    try {
      this.srv.update(id, this.produit);
      console.log(this.produit);
      this.stateUpdate.error = false;
      this.stateUpdate.message = 'Succes: Le Produit a bien ete ajoute.';
    } catch (error) {
      this.stateUpdate.error = true;
      this.stateUpdate.message = 'Une erreur est survenue.';
      console.log(error);
    }
  }

  async getProduit(id) {
    try {
      this.produit = await this.srv.getProduit(id);
      this.previewImageSrc = `${environment.apiUrl}/image/${this.produit.image}`;
      console.log(this.produit);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduit(id, nom, produit) {
    if (nom != produit.nom) {
      this.stateDelete.error = true;
      this.stateDelete.message = 'Le nom ne correspond pas. ';
      return;
    }
    try {
      await this.srv.delete(id);
      this.stateDelete.error = false;
      this.stateDelete.message = 'Le Produit a bien ete supprime. ';
      this.router.navigate(['/admin/produits']);
    } catch (error) {
      this.stateDelete.error = true;
      this.stateDelete.message = 'Une erreur est survenue. ';
      console.log(error);
    }
  }
}

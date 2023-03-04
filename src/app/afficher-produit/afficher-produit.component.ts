import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.css'],
})
export class AfficherProduitComponent {
  produit: any;
  imgUrl: string;
  quantite = 1;
  id: number = 0;
  stateAdd = { error: false, message: '' };

  constructor(
    private srv: SrvProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.imgUrl = `${environment.apiUrl}/image`;
    this.affiche(this.id);
  }

  incQuantite() {
    this.quantite++;
  }

  decQuantite() {
    if (this.quantite > 1) this.quantite--;
  }

  async affiche(id: number) {
    try {
      this.produit = await this.srv.getProduit(id);

      console.log(this.produit);
    } catch (error) {
      console.log(error);
    }
  }

  async ajouterPanier(id: number, quantite) {
    try {
      this.srv.ajouterPanier(id, quantite);
      this.stateAdd.error = false;
      this.stateAdd.message = 'Le produit a bien été ajouté au panier';
      console.log(JSON.parse(sessionStorage.getItem('panier')));
    } catch (error) {
      console.log(error);
      this.stateAdd.error = false;
      this.stateAdd.message = "Une erreur s'est produite";
    }
  }
}

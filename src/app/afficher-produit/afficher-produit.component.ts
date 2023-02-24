import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.css'],
})
export class AfficherProduitComponent {
  produit: any;
  quantite = 1;
  id: number = 0;

  constructor(private srv: SrvProduitService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
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
}

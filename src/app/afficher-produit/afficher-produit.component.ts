import { Component } from '@angular/core';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-afficher-produit',
  templateUrl: './afficher-produit.component.html',
  styleUrls: ['./afficher-produit.component.css']
})
export class AfficherProduitComponent {
  p: any
  id: number = 0;

  constructor(private srv: SrvProduitService) { }

  ngOnInit(): void {}

  affiche() {
    this.srv.getProduit(this.id).then(x=>this.p=x);
  }
}

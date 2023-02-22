import { Component } from '@angular/core';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-choix-produits',
  templateUrl: './choix-produits.component.html',
  styleUrls: ['./choix-produits.component.css']
})
export class ChoixProduitsComponent {
  liste: any

  constructor(private srv: SrvProduitService) { }

  ngOnInit(): void {
    this.srv.getliste().then(x=>this.liste=x);
  }
}

import { Component } from '@angular/core';
import { Client } from '../client';
import { Commande } from '../commande';
import { Ligne } from '../ligne';
import { Produit } from '../produit';
import { SrvCommandeService } from '../srv-commande.service';

@Component({
  selector: 'app-valider-commande',
  templateUrl: './valider-commande.component.html',
  styleUrls: ['./valider-commande.component.css']
})
export class ValiderCommandeComponent {
  commande: Commande = new Commande;

  constructor(private srvCommandeService: SrvCommandeService) {}

  ngOnInit(): void {
    let lignes;
    let str: string = sessionStorage.getItem("panier");
    console.log("PANIER: " + str);//!\\_TEST_//!\\
    if (str != null) {
      lignes = JSON.parse(str);
    }
    console.log("LIGNES: " + lignes);//!\\_TEST_//!\\

    str = localStorage.getItem('client');
    console.log("CLIENT: " + str);//!\\_TEST_//!\\
    let client = new Client;
    client = JSON.parse(str);
    console.log("CLIENT: " + client);//!\\_TEST_//!\\

    let liste = Array<Commande>;
    this.srvCommandeService.getliste().then(x=>liste=x);

    this.commande.prixTotal = 0;
    for (let l of lignes) {
      this.commande.prixTotal += l.produit.prix;
    }
    this.commande.lignes = lignes;
    this.commande.client = client;
    
    console.log("TOTAL: " + this.commande.prixTotal);//!\\_TEST_//!\\
    console.log("COMMANDE: " + JSON.stringify(this.commande));//!\\_TEST_//!\\
    this.srvCommandeService.saveCommande(this.commande);
  }
}

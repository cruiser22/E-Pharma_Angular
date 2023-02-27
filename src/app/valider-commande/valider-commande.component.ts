import { Component } from '@angular/core';
import { Client } from '../client';
import { Commande } from '../commande';
import { SrvClientService } from '../srv-client.service';
import { SrvCommandeService } from '../srv-commande.service';

@Component({
  selector: 'app-valider-commande',
  templateUrl: './valider-commande.component.html',
  styleUrls: ['./valider-commande.component.css'],
})
export class ValiderCommandeComponent {
  commande: Commande = new Commande();
  client;
  panier;
  total = 0;
  lignes = [];

  constructor(
    private srvCommandeService: SrvCommandeService,
    private srvClientService: SrvClientService
  ) {}

  getClient() {
    this.client = JSON.parse(localStorage.getItem('client'));
  }

  async validerCommande() {
    const commande = await this.srvCommandeService.saveCommande({
      client: this.client,
      lignes: this.panier,
      prixTotal: this.total,
    });

    if (commande) {
      const client = await this.srvClientService.getById(this.client.id);
      sessionStorage.removeItem('panier');
      localStorage.setItem('client', JSON.stringify(client));
    }
  }

  ngOnInit(): void {
    this.getClient();
    let str: string = sessionStorage.getItem('panier');
    this.total = 0;
    if (str != null) {
    }
    if (str != null) {
      this.panier = JSON.parse(sessionStorage.getItem('panier'));
      for (let p of this.panier) {
        this.total += p.total;
      }
    }
  }
}

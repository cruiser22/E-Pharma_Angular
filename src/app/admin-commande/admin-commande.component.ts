import { Component, OnInit } from '@angular/core';
import { Commande } from '../commande';
import { SrvCommandeService } from '../srv-commande.service';

@Component({
  selector: 'app-admin-commande',
  templateUrl: './admin-commande.component.html',
  styleUrls: ['./admin-commande.component.css'],
})
export class AdminCommandeComponent {
  stateAdd = { error: false, message: '' };
  commandes: Commande[] | any;
  constructor(private srv: SrvCommandeService) {}

  ngOnInit() {
    this.getCommande();
  }

  async getCommande() {
    try {
      this.commandes = await this.srv.getliste();
      console.log(this.commandes);
    } catch (error) {
      console.log(error);
    }
  }
}

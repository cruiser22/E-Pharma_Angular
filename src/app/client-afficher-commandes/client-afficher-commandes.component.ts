import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../commande';
import { SrvCommandeService } from '../srv-commande.service';

@Component({
  selector: 'app-client-afficher-commandes',
  templateUrl: './client-afficher-commandes.component.html',
  styleUrls: ['./client-afficher-commandes.component.css'],
})
export class ClientAfficherCommandesComponent {
  constructor(private route: ActivatedRoute, private srv: SrvCommandeService) {}
  commande: Commande;

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.getCommande(id);
  }

  async getCommande(id) {
    try {
      this.commande = await this.srv.getCommande(id);
    } catch (error) {
      console.log(error);
    }
  }
}

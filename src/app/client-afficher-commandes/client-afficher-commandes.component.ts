import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Commande } from '../commande';
import { SrvCommandeService } from '../srv-commande.service';

@Component({
  selector: 'app-client-afficher-commandes',
  templateUrl: './client-afficher-commandes.component.html',
  styleUrls: ['./client-afficher-commandes.component.css'],
})
export class ClientAfficherCommandesComponent {
  imgUrl;
  constructor(private route: ActivatedRoute, private srv: SrvCommandeService) {}
  commande: Commande;
  date;

  ngOnInit() {
    this.imgUrl = `${environment.apiUrl}/image`;
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.getCommande(id);
  }

  async getCommande(id) {
    try {
      this.commande = await this.srv.getCommande(id);
      let localDateTime = new Date(this.commande.date);
      this.date = localDateTime.toLocaleDateString('fr-FR', {
        dateStyle: 'medium',
      });
    } catch (error) {
      console.log(error);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Commande } from '../commande';
import { SrvCommandeService } from '../srv-commande.service';

@Component({
  selector: 'app-admin-commande',
  templateUrl: './admin-commande.component.html',
  styleUrls: ['./admin-commande.component.css']
})
export class AdminCommandeComponent {


stateAdd = { error: false, message: '' };
commande= new Commande;
constructor(private srv: SrvCommandeService) {}

ngOnInit() {
  this.getCommande();
  
}

async getCommande() {
  try {
    this.commande = await this.srv.getcommande();
  } catch (error) {
    console.log(error);
  }
}

}
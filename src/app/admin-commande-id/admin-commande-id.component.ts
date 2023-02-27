import { Component } from '@angular/core';
import { Commande } from '../commande';
import { SrvCommandeService } from '../srv-commande.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-commande-id',
  templateUrl: './admin-commande-id.component.html',
  styleUrls: ['./admin-commande-id.component.css']
})
export class AdminCommandeIdComponent {

commande: Commande | any;
 
  newPassword: string;
  email: string;

  constructor(
    
    private srv: SrvCommandeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.getCommande(id);
  }
  
  }


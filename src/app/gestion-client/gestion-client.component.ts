import { Component } from '@angular/core';
import { Client } from '../client';
import { SrvClientService } from '../srv-client.service';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css'],
})
export class GestionClientComponent {
  client = new Client();
  stateAdd = { error: false, message: '' };
  clients: Client[] | any;
  constructor(private srv: SrvClientService) {}

  ngOnInit() {
    this.getClient();
    this.client.id = null;
  }

  async getClient() {
    try {
      this.clients = await this.srv.getliste();
    } catch (error) {
      console.log(error);
    }
  }

  async addClient(client) {
    const response = await this.srv.add(client);
    this.client = new Client();
    if (!response.status) {
      console.log(response);
      await this.srv.addMoreInfo({ ...client, id: response.id });
      this.getClient();
      this.stateAdd = {
        error: false,
        message: 'Succes: Le client a bien ete ajoute.',
      };
    } else {
      if (response.status == 401) {
        this.stateAdd = {
          error: true,
          message: 'Erreur: Cette adresse mail est deja utilisee.',
        };
      }
    }
  }
}

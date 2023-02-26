import { Component } from '@angular/core';
import { Client } from '../client';
import { SrvClientService } from '../srv-client.service';

@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css'],
})
export class GestionClientComponent {
  clients: Client[] | any;
  constructor(private srv: SrvClientService) {}

  ngOnInit() {
    this.getClient();
  }

  async getClient() {
    try {
      this.clients = await this.srv.getliste();
    } catch (error) {
      console.log(error);
    }
  }
}

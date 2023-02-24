import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { SrvClientService } from '../srv-client.service';
import { SrvProduitService } from '../srv-produit.service';

@Component({
  selector: 'app-gestion-client-edit',
  templateUrl: './gestion-client-edit.component.html',
  styleUrls: ['./gestion-client-edit.component.css'],
})
export class GestionClientEditComponent {
  client: Client | any;
  stateUpdate = { error: false, message: null };
  stateUpdatePassword = { error: false, message: null };
  stateDelete = { error: false, message: null };
  newPassword: string;
  email: string;

  constructor(
    private router: Router,
    private srv: SrvClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

    this.getClient(id);
  }

  async update(id) {
    try {
      this.srv.update(id, this.client);
      this.stateUpdate.error = false;
      this.stateUpdate.message = 'Succes: Le client a bien ete mis a jour.';
    } catch (error) {
      this.stateUpdatePassword.error = true;
      this.stateUpdatePassword.message = 'Une erreur est survenue.';
      console.log(error);
    }
  }

  async updatePassword(id, client) {
    client.pass = this.newPassword;
    try {
      this.srv.update(id, client);
      this.stateUpdatePassword.error = false;
      this.stateUpdatePassword.message =
        'Succes: Le mot de passe du client a bien ete mis a jour.';
    } catch (error) {
      this.stateUpdatePassword.error = true;
      this.stateUpdatePassword.message = 'Une erreur est survenue.';
      console.log(error);
    }
  }

  async getClient(id) {
    try {
      this.client = await this.srv.getById(id);
      console.log(this.client);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteClient(id, email, client: Client) {
    if (email != client.email) {
      this.stateDelete.error = true;
      this.stateDelete.message = "L'email ne correspond pas. ";
      return;
    }
    try {
      this.client = await this.srv.delete(id);
      this.stateDelete.error = false;
      this.stateDelete.message = 'Le client a bien ete supprime. ';
      this.router.navigate(['/admin/clients']);
    } catch (error) {
      this.stateDelete.error = true;
      this.stateDelete.message = 'Une erreur est survenue. ';
      console.log(error);
    }
  }
}

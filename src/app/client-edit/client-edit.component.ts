import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SrvClientService } from '../srv-client.service';
import { Client } from '../client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
})
export class ClientEditComponent implements OnInit {
  context = 0; // 0 => profil | 1 => commandes;

  id: number;
  client: Client = {
    id: 1,
    nom: '',
    prenom: '',
    pass: '',
    adresse: '',
    email: '',
    commandes: [],
    version: 0,
  };
  message = '';
  currentPassword: string;
  newPassword: string;

  constructor(
    private srv: SrvClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    let client = localStorage.getItem('client');
    if (!client) {
      this.router.navigate(['/login']);
    } else {
      this.client = JSON.parse(client);
      console.log(this.client);
    }

    this.srv.getById(this.client.id);
  }

  afficher(context) {
    this.context = context;
  }

  update() {
    this.srv.update(this.client.id, this.client);
  }
  updatePassword() {
    // Vérifier que le mot de passe actuel est correct
    if (this.currentPassword !== this.client.pass) {
      this.message = 'Mot de passe actuel incorrect.';
      return;
    }

    // Mettre à jour le mot de passe du client
    this.client.pass = this.newPassword;
    this.srv.update(this.client.id, this.client).then(
      () => {
        this.message = 'Mot de passe mis à jour avec succès.';
      },
      () => {
        this.message = 'Erreur lors de la mise à jour du mot de passe.';
      }
    );
  }

  logout() {
    if (this.client) {
      localStorage.removeItem('client');
      this.client = null;
      this.router.navigate(['/']);
    }
  }
}

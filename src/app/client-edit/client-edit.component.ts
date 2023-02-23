import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SrvClientService } from '../srv-client.service';
import { Client } from '../client';

import { EnvironementsModule } from '../environements/environements.module';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  id: number;
  client : Client = { id: 1, nom: '', prenom: '', pass: '', adresse: '', version: 0 };
  message = '';

  constructor(
    private http: HttpClient, private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.findById();
  }

  findById() {
    this.http
      .get<Client>(`${EnvironementsModule.apiUrl}/${this.id}`)
      .subscribe((response) => {
        this.client = response;
      });
  }

  update() {
    this.http
      .put<Client>(
        `${EnvironementsModule.apiUrl}`,
        JSON.stringify(this.client),
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .subscribe(
        (response) => {
          this.message = 'Personne Mise à jour';
          this.findById();
          console.log(response);
        },
        (err) => {
          this.message = 'erreur : ' + err.message;
          console.log(err);
        }
      );
  }
}


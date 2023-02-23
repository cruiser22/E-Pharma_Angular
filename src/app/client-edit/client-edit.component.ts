import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SrvClientService } from '../srv-client.service';
import { Client } from '../client';
import { environment } from 'src/environments/environment';



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
    private srv: SrvClientService, private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.client=JSON.parse(localStorage.getItem("client"))
    this.srv.getById(this.client.id)
  
  }

  update() {
    this.srv.update(this.client.id,this.client)
  }
}
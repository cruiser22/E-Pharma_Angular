import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SrvClientService {
  lst: any;
  client: any;

  constructor(private http: HttpClient) {}

  getliste() {
    return this.http
      .get('http://localhost:8080/api/clients')
      .toPromise()
      .then((res) => {
        this.lst = res;
        return this.lst;
        // code here is executed on success
      })
      .catch();
  }

  getByEmail(email: string) {
    return this.http
      .get(`${environment.apiUrl}/clients/email/${email}`)
      .toPromise()
      .then((res) => {
        this.client = res;
        return this.lst;
        // code here is executed on success
      })
      .catch();
  }

  login({ email, password }: Login) {
    return this.http
      .post(
        `${environment.apiUrl}/clients/login`,
        JSON.stringify({ email, password }),
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .toPromise()
      .then((res) => {
        this.client = res;
        return this.client;
        // code here is executed on success
      })
      .catch();
  }

  signup({ email, password }: Login) {
    return this.http
      .post(
        `${environment.apiUrl}/clients`,
        JSON.stringify({ email, password }),
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .toPromise()
      .then((res) => {
        this.client = res;
        return this.client;
      })
      .catch();
  }

  getById(id: number) {
    return this.http
      .get(`${environment.apiUrl}/clients/${id}`)
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch();
  }
  async addMoreInfo({ id, nom, prenom, adresse }: MoreInfo) {
    let client = await this.getById(id);
    console.log('getByid', client);

    return this.http
      .put(
        `${environment.apiUrl}/clients/${id}`,
        JSON.stringify({ ...client, nom, prenom, adresse }),
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .toPromise()
      .then((res) => {
        this.client = res;
        return this.client;
        // code here is executed on success
      })
      .catch();
  }

  async update(id: number, client: any) {
    let c = await this.getById(id);

    return this.http
      .put<Client>(
        `${environment.apiUrl}/clients/${id}`,
        JSON.stringify({ ...c, ...client }),
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .toPromise()
      .then((res) => {
        this.client = res;
        localStorage.setItem('client', JSON.stringify(this.client));
        return this.client;
        // code here is executed on success
      })
      .catch();
  }

  updatePassword(id: number, newPassword: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { pass: newPassword };
    return this.http
      .put<Client>(`${environment.apiUrl}/clients/${id}`, body, { headers })
      .toPromise();
  }

  async delete(id: number) {
    const res = await this.http
      .delete(`${environment.apiUrl}/clients/${id}`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .toPromise();
    return res;
  }

  async add(client: Client) {
    const res = await this.http
      .post(`${environment.apiUrl}/clients`, client, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .toPromise()
      .catch((error) => {
        return error;
      });
    return res;
  }
  
  resetPassword(token: string, password: string) {
    const url = `${environment.apiUrl}/clients`;
    const data = { token, password };
    return this.http.post(url, data).toPromise();
  }
  requestResetPassword(email: string) {
    const url = `${environment.apiUrl}/clients`;
    const data = { email };
    return this.http.post(url, data).toPromise();
  }
}

interface Login {
  email: string;
  password: string;
}

interface MoreInfo {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

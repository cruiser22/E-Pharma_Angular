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
        `${environment.apiUrl}/clients/connexion`,
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
}

interface Login {
  email: string;
  password: string;
}

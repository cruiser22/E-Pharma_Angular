import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SrvCommandeService {
  cmd: any;
  lst: any;

  constructor(private http: HttpClient) {}

  saveCommande(commande) {
    return this.http
      .post('http://localhost:8080/api/commande', commande, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .toPromise()
      .then((res) => {
        this.cmd = res;
        return this.cmd;
      })
      .catch();
  }

  getCommande(id) {
    return this.http
      .get('http://localhost:8080/api/commande/'+id)
      .toPromise()
      .then((res) => {
        this.cmd = res;
        return this.cmd;
        // code here is executed on success
      })
      .catch();
  }

  getliste() {
    return this.http
      .get('http://localhost:8080/api/commande')
      .toPromise()
      .then((res) => {
        this.cmd = res;
        return this.cmd;
        // code here is executed on success
      })
      .catch();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvCommandeService {
  cmd: any
  lst: any;

  constructor(private http: HttpClient) { }

  getliste() {
    return this.http
      .get('http://localhost:8080/api/produit')
      .toPromise()
      .then((res) => {
        this.lst = res;
        return this.lst;
        // code here is executed on success
      })
      .catch();
  }

  saveCommande(commande) {
    return this.http.post('http://localhost:8080/api/commande',commande,{
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })}).toPromise().then((res) => {
        this.cmd = res;
        return this.cmd;
      })
      .catch();
  }
}

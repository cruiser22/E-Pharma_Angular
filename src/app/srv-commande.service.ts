import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvCommandeService {
  cmd: any

  constructor(private http: HttpClient) { }

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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root',
})
export class SrvProduitService {
  lst: any;

  constructor(private http: HttpClient) {}

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

  getListeByCategorie(categorie: number) {
    return this.http
      .get<Produit[]>(`${environment.apiUrl}/produit?categorie=${categorie}`)
      .toPromise()
      .then((res) => {
        return res;
        // code here is executed on success
      })
      .catch();
  }

  getProduit(id: number) {
    return this.http
      .get<Produit>('http://localhost:8080/api/produit/' + id)
      .toPromise()
      .then((res) => {
        this.lst = res;
        return this.lst;
        // code here is executed on success
      })
      .catch();
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
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
        return res;
        // code here is executed on success
      })
      .catch();
  }

  async delete(id: number) {
    const res = await this.http
      .delete(`${environment.apiUrl}/produit/${id}`, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .toPromise();
    return res;
  }

  async update(id: number, produit: any) {
    let c = await this.getProduit(id);

    return this.http
      .put<Produit>(
        `${environment.apiUrl}/produit/${id}`,
        JSON.stringify({ ...c, ...produit }),
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .toPromise()
      .then((res) => {
        return res;
        // code here is executed on success
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  upload(id: number, image: FormData) {
    return this.http
      .post(`${environment.apiUrl}/produit/upload/${id}`, image)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  add(produit: Produit) {
    return this.http
      .post<Produit>(`${environment.apiUrl}/produit`, JSON.stringify(produit), {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .toPromise()
      .then((res) => {
        return res;
        // code here is executed on success
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

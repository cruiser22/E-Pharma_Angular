import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root',
})
export class SrvCategorieService {
  constructor(private http: HttpClient) {}

  async getListe() {
    const res = await this.http
      .get(`${environment.apiUrl}/categories`)
      .toPromise();
    return res;
  }

  async getCategorie(id: number) {
    const res = await this.http
      .get(`${environment.apiUrl}/categories/${id}`)
      .toPromise();
    return res;
  }

  async delete(id: number) {
    return this.http
      .delete(`${environment.apiUrl}/categories/${id}`)
      .toPromise()
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        return error;
      });
  }

  async add(categorie: Categorie) {
    const res = await this.http
      .post(`${environment.apiUrl}/categories`, categorie, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .toPromise()
      .catch((error) => {
        return error;
      });
    return res;
  }

  async update(id: number, categorie: Categorie) {
    let c = await this.getCategorie(id);

    return this.http
      .put<Categorie>(
        `${environment.apiUrl}/categories/${id}`,
        JSON.stringify({ ...c, ...categorie }),
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .toPromise()
      .then((res) => {
        return res;
        // code here is executed on success
      })
      .catch((error) => {
        return error;
      });
  }
}

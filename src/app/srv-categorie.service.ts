import { HttpClient } from '@angular/common/http';
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
}

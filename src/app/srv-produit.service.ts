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
  panier: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  async ajouterPanier(id: number, quantite) {
    let newProduit = await this.getProduit(id);
    let produits = [];
    if (!sessionStorage.getItem('panier')) {
      sessionStorage.setItem('panier', JSON.stringify([]));
    }

    produits = JSON.parse(sessionStorage.getItem('panier'));

    console.log(produits);
    this.ajouterLigne(newProduit, quantite, produits);
    sessionStorage.setItem('panier', JSON.stringify(produits));
    console.log(JSON.parse(sessionStorage.getItem('panier')));
  }

  async enleverPanier(id: number, quantite) {
    let produits = [];
    if (sessionStorage.getItem('panier')) {
      produits = JSON.parse(sessionStorage.getItem('panier'));
    } else {
      return;
    }
    this.enleverLigne(id, quantite, produits);
    sessionStorage.setItem('panier', JSON.stringify(produits));
  }

  enleverLigne(id, quantite, produits) {
    for (let p of produits) {
      if (p.produit.id === id) {
        if (p.quantite > quantite) {
          p.quantite -= quantite;
          p.total = p.produit.prix * p.quantite;
          console.log(p);
          return;
        }
        produits.splice(produits.indexOf(p), 1);
      }
    }
  }

  ajouterLigne(produit, quantite, produits) {
    for (let p of produits) {
      if (p.produit.id === produit.id) {
        p.quantite += quantite;
        p.total = p.produit.prix * p.quantite;
        return;
      }
    }
    produits.push({
      produit: produit,
      quantite: quantite,
      total: produit.prix * quantite,
    });
  }

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

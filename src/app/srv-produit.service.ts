import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class SrvProduitService {
  lst: any

  constructor(private http:HttpClient) { }

  getliste()
  {
    return this.http.get("http://localhost:8080/api/produit").toPromise().then(res => {
      this.lst =res;
     return this.lst;
      // code here is executed on success
    })
   .catch();
  }

  getProduit(id:number)
  {
    return this.http.get<Produit>("http://localhost:8080/api/produit/" + id).toPromise().then((res) => {
     return res;
      // code here is executed on success
    })
   .catch();
  }
  
}

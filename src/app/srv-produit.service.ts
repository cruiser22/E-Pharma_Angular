import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  
}

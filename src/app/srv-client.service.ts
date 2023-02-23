import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class SrvClientService {

  lst: any
 


  constructor(private http:HttpClient) { }

  getliste()
  {
    return this.http.get("http://localhost:8080/api/clients").toPromise().then(res => {
      this.lst =res;
     return this.lst;
      // code here is executed on success
    })
   .catch();
  }
 
}

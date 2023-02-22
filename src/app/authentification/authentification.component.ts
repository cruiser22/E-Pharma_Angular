import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  nom: string = '';
  motDePasse: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  authentifier(authForm: NgForm) {
    const credentials = {
      nom: this.nom,
      motDePasse: this.motDePasse
    };
  
    this.http.post('/api/authentification', credentials, { observe: 'response' }).subscribe(response => {
      const token = response.headers.get('Authorization');
      localStorage.setItem('access_token', token);
      this.router.navigate(['/']);
    }, error => {
      console.error(error);
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    });
  }
}

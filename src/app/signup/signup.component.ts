import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SrvClientService } from '../srv-client.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm = { email: '', password: '' };
  response: any = { error: false, message: '' };
  moreInfo = { nom: '', prenom: '', adresse: '' };
  displayMoreInfo: boolean = false;

  constructor(private srv: SrvClientService, private router: Router) {}

  signUp() {
    console.log(this.signUpForm);
    this.srv
      .signup({
        email: this.signUpForm.email,
        password: this.signUpForm.password,
      })
      .then((x) => {
        this.response = x;
        this.response.error = false;
        localStorage.setItem('client', JSON.stringify(this.response));
        this.displayMoreInfo = true;
      })
      .catch((err) => {
        this.response.error = true;
        if (err.status == 401) {
          this.response.message = 'Un compte avec cet email existe deja';
        }
      });
  }

  addMoreInfo() {
    let client: any = localStorage.getItem('client');
    console.log(JSON.parse(client));
    this.srv
      .addMoreInfo({
        id: JSON.parse(client).id,
        nom: this.moreInfo.nom,
        prenom: this.moreInfo.prenom,
        adresse: this.moreInfo.adresse,
      })
      .then((client) => {
        localStorage.setItem('client', JSON.stringify(client));
        this.router.navigate(['/']);
      });
  }
}

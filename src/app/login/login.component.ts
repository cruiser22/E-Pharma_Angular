import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SrvClientService } from '../srv-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = { email: '', password: '' };
  logged: boolean = false;
  response: any = { error: false, message: '' };

  constructor(private srv: SrvClientService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('client')) {
      this.router.navigate(['/profil']);
    }
  }

  login() {
    this.srv
      .login({
        email: this.loginForm.email,
        password: this.loginForm.password,
      })
      .then((x) => {
        this.response = x;
        this.response.error = false;
        localStorage.setItem('client', JSON.stringify(this.response));
        this.router.navigate(['/profil']);
      })
      .catch((err) => {
        this.response.error = true;
        if (err.status == 401) {
          this.response.message = 'Mauvaise combinaison Email/Mot de passe';
        } else if (err.status == 404) {
          this.response.message = 'Pas de compte avec cet email';
        }
      });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  email: string;
  password: string;
  message: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.adminLogin(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('admin', JSON.stringify(response));
        this.router.navigate(['/admin']);
      },
      (error) => {
        this.message = 'Erreur lors de la connexion.';
      }
    );
  }
}
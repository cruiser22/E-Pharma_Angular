import { Component } from '@angular/core';
import { Admin } from '../admin';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  nom: string;

  constructor(private authService: AuthService) {
    authService.adminLogin('email', 'password').subscribe(
      (admin: Admin) => {
        this.nom = admin.nom;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

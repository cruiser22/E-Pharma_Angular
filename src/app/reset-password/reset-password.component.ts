import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SrvClientService } from '../srv-client.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isConnected: boolean = false;

  constructor(private srv: SrvClientService, private router: Router) { }

  ngOnInit(): void {
    const client = JSON.parse(localStorage.getItem('client') || '{}');
    if (client.id) {
      this.isConnected = true;
    }
  }

  updatePassword() {
    const client = JSON.parse(localStorage.getItem('client') || '{}');
    this.srv.updatePassword(client.id, this.password)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        this.errorMessage = err.error.message || 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.';
      });
  }
  
}

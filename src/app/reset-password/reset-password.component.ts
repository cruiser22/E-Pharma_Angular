import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SrvClientService } from '../srv-client.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isConnected: boolean = false;

  constructor(private srv: SrvClientService) { }

  ngOnInit(): void {
    const client = JSON.parse(localStorage.getItem('client') || '{}');
    if (client.id) {
      this.isConnected = true;
    }
  }

  requestResetPassword() {
    this.srv.requestResetPassword(this.email)
      .then(() => {
        this.successMessage = 'La demande de réinitialisation de mot de passe a été envoyée avec succès. Veuillez vérifier votre boîte de réception pour les instructions de réinitialisation.';
        this.errorMessage = '';
      })
      .catch((err) => {
        this.errorMessage = (err.error && err.error.message) || 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.';
        this.successMessage = '';
      });
  }

  updatePassword() {
    const client = JSON.parse(localStorage.getItem('client') || '{}');
    this.srv.updatePassword(client.id, this.password)
      .then(() => {
        this.successMessage = 'Le mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.';
        this.errorMessage = '';
      })
      .catch((err) => {
        this.errorMessage = err.error.message || 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.';
        this.successMessage = '';
      });
  }

}
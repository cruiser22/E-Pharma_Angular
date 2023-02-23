import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SrvClientService } from '../srv-client.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent {
  client: any = null;

  constructor(private srv: SrvClientService, private router: Router) {}

  ngOnInit() {
    let client = localStorage.getItem('client');
    if (!client) {
      this.router.navigate(['/login']);
    } else {
      this.client = JSON.parse(client);
      console.log(this.client);
    }
  }

  logout() {
    if (this.client) {
      localStorage.removeItem('client');
      this.client = null;
      this.router.navigate(['/']);
    }
  }
}

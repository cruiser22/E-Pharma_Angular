import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  admin: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('admin')) {
      this.router.navigate(['/admin/login']);
    }

    this.admin = JSON.parse(localStorage.getItem('admin'));
  }
}

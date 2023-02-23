import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  client: any;
  open: boolean = false;
  ngOnInit() {
    this.client = localStorage.getItem('client');
  }

  toggleNav() {
    this.open = !this.open;
  }
}

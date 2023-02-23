import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'E-pharma';

  ngOnInit() {
    if (localStorage.getItem('client')) {
      console.log(JSON.parse(localStorage.getItem('client')!));
    }
  }
}

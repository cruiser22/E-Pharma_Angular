import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'E-pharma';
  currentRoute;

  constructor(private router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('client')) {
      console.log(JSON.parse(localStorage.getItem('client')!));
    }

    console.log(this.currentRoute);
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
          console.log(this.currentRoute);
          console.log(localStorage.getItem('admin'));
          console.log(this.currentRoute.split('/')[1]);
          if (
            this.currentRoute.split('/')[1] == 'admin' &&
            !localStorage.getItem('admin')
          ) {
            console.log(this.currentRoute);
            this.router.navigate(['/admin/login']);
          }
        }
      });
  }
}

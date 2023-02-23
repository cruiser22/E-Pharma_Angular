import { Component } from '@angular/core';
import { SrvClientService } from '../srv-client.service';

@Component({
  selector: 'app-infos-client',
  templateUrl: './infos-client.component.html',
  styleUrls: ['./infos-client.component.css'],
})
export class InfosClientComponent {
  liste: any;

  constructor(private srv: SrvClientService) {}

  ngOnInit(): void {
    this.srv.getliste().then((x) => (this.liste = x));
  }
}

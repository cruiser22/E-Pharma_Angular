import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAfficherCommandesComponent } from './client-afficher-commandes.component';

describe('ClientAfficherCommandesComponent', () => {
  let component: ClientAfficherCommandesComponent;
  let fixture: ComponentFixture<ClientAfficherCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAfficherCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAfficherCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

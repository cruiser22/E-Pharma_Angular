import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPanierComponent } from './afficher-panier.component';

describe('AfficherPanierComponent', () => {
  let component: AfficherPanierComponent;
  let fixture: ComponentFixture<AfficherPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

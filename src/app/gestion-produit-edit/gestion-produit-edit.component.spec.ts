import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProduitEditComponent } from './gestion-produit-edit.component';

describe('GestionProduitEditComponent', () => {
  let component: GestionProduitEditComponent;
  let fixture: ComponentFixture<GestionProduitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProduitEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProduitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

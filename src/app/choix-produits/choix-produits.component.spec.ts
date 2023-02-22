import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixProduitsComponent } from './choix-produits.component';

describe('ChoixProduitsComponent', () => {
  let component: ChoixProduitsComponent;
  let fixture: ComponentFixture<ChoixProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCategoriesEditComponent } from './gestion-categories-edit.component';

describe('GestionCategoriesEditComponent', () => {
  let component: GestionCategoriesEditComponent;
  let fixture: ComponentFixture<GestionCategoriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCategoriesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionClientEditComponent } from './gestion-client-edit.component';

describe('GestionClientEditComponent', () => {
  let component: GestionClientEditComponent;
  let fixture: ComponentFixture<GestionClientEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionClientEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionClientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommandeIdComponent } from './admin-commande-id.component';

describe('AdminCommandeIdComponent', () => {
  let component: AdminCommandeIdComponent;
  let fixture: ComponentFixture<AdminCommandeIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommandeIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCommandeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

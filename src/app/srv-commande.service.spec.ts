import { TestBed } from '@angular/core/testing';

import { SrvCommandeService } from './srv-commande.service';

describe('SrvCommandeService', () => {
  let service: SrvCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

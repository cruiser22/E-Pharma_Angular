import { TestBed } from '@angular/core/testing';

import { SrvProduitService } from './srv-produit.service';

describe('SrvProduitService', () => {
  let service: SrvProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

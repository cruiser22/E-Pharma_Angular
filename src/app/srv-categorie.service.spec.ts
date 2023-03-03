import { TestBed } from '@angular/core/testing';

import { SrvCategorieService } from './srv-categorie.service';

describe('SrvCategorieService', () => {
  let service: SrvCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

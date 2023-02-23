import { TestBed } from '@angular/core/testing';

import { SrvClientService } from './srv-client.service';

describe('SrvClientService', () => {
  let service: SrvClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

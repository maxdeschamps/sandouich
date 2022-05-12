import { TestBed } from '@angular/core/testing';

import { SandouichService } from './sandouich.service';

describe('SandouichService', () => {
  let service: SandouichService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandouichService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DonationsGuard } from './donations.guard';

describe('DonationsGuard', () => {
  let guard: DonationsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DonationsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

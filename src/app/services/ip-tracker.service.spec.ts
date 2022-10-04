import { TestBed } from '@angular/core/testing';

import { IpTrackerService } from './ip-tracker.service';

describe('IpTrackerService', () => {
  let service: IpTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

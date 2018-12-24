import { TestBed, inject } from '@angular/core/testing';

import { PharmacyQueueService } from './pharmacy-queue.service';

describe('PharmacyQueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PharmacyQueueService]
    });
  });

  it('should be created', inject([PharmacyQueueService], (service: PharmacyQueueService) => {
    expect(service).toBeTruthy();
  }));
});

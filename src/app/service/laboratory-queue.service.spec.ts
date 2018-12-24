import { TestBed, inject } from '@angular/core/testing';

import { LaboratoryQueueService } from './laboratory-queue.service';

describe('LaboratoryQueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaboratoryQueueService]
    });
  });

  it('should be created', inject([LaboratoryQueueService], (service: LaboratoryQueueService) => {
    expect(service).toBeTruthy();
  }));
});

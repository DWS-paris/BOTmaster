import { TestBed, inject } from '@angular/core/testing';

import { RecastService } from './recast.service';

describe('RecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecastService]
    });
  });

  it('should be created', inject([RecastService], (service: RecastService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { ForkJsonService } from './fork-json.service';

describe('ForkJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForkJsonService = TestBed.get(ForkJsonService);
    expect(service).toBeTruthy();
  });
});

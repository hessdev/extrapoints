import { TestBed, inject } from '@angular/core/testing';

import { InfoResolverService } from './info-resolver.service';

describe('InfoResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoResolverService]
    });
  });

  it('should be created', inject([InfoResolverService], (service: InfoResolverService) => {
    expect(service).toBeTruthy();
  }));
});

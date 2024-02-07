import { TestBed } from '@angular/core/testing';

import { HeroMockApiService } from './hero.mock.api.service';

describe('HeroMockApiService', () => {
  let service: HeroMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

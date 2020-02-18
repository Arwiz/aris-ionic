import { TestBed } from '@angular/core/testing';

import { PlanetApiService } from './planet-api.service';

describe('PlanetApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetApiService = TestBed.get(PlanetApiService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TerritoiresService } from './territoires.service';

describe('TerritoiresService', () => {
  let service: TerritoiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerritoiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

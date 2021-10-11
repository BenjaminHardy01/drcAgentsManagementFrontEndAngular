import { TestBed } from '@angular/core/testing';

import { GroupementsService } from './groupements.service';

describe('GroupementsService', () => {
  let service: GroupementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

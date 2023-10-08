import { TestBed } from '@angular/core/testing';

import { PrimerServiService } from './primer-servi.service';

describe('PrimerServiService', () => {
  let service: PrimerServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimerServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

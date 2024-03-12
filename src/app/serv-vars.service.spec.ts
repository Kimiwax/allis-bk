import { TestBed } from '@angular/core/testing';

import { ServVarsService } from './serv-vars.service';

describe('ServVarsService', () => {
  let service: ServVarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServVarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

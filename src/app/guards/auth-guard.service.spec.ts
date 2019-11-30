import { TestBed } from '@angular/core/testing';

import { GeneralAuth } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralAuth = TestBed.get(GeneralAuth);
    expect(service).toBeTruthy();
  });
});

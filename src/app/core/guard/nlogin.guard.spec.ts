import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nloginGuard } from './nlogin.guard';

describe('nloginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nloginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

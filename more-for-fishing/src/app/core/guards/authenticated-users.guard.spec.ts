import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticatedUsersGuard } from './authenticated-users.guard';

describe('AuthenticatedUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedUsersGuard]
    });
  });

  it('should ...', inject([AuthenticatedUsersGuard], (guard: AuthenticatedUsersGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { UserManagementService } from './user-management.service';

describe('UserService', () => {
  let service: UserManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { Services\userService } from './services\user.service';

describe('Services\userService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services\userService]
    });
  });

  it('should be created', inject([Services\userService], (service: Services\userService) => {
    expect(service).toBeTruthy();
  }));
});

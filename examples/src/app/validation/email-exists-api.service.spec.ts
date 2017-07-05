import { TestBed, inject } from '@angular/core/testing';

import { EmailExistsApiService } from './email-exists-api.service';

describe('EmailExistsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailExistsApiService]
    });
  });

  it('should be created', inject([EmailExistsApiService], (service: EmailExistsApiService) => {
    expect(service).toBeTruthy();
  }));
});

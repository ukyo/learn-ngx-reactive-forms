import { TestBed, inject } from '@angular/core/testing';

import { LoginFormGroupWithDefaultValidatorFactoryService } from './login-form-group-with-default-validator-factory.service';

describe('LoginFormGroupWithDefaultValidatorFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormGroupWithDefaultValidatorFactoryService]
    });
  });

  it('should be created', inject([LoginFormGroupWithDefaultValidatorFactoryService], (service: LoginFormGroupWithDefaultValidatorFactoryService) => {
    expect(service).toBeTruthy();
  }));
});

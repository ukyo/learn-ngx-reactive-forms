/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginFormWithValidationService } from './login-form-with-validation.service';
import { ValidationModule } from "app/validation/validation.module";

describe('LoginFormWithValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValidationModule]
    });
  });

  it('should ...', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
    expect(service).toBeTruthy();
  }));
});

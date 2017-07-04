/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { LoginFormWithValidationService } from './login-form-with-validation.service';
import { ValidationModule } from "app/validation/validation.module";

describe('LoginFormWithValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValidationModule]
    });
  });

  describe('groupWithValidators', () => {
    it('should be valid if the form is fulfilled.', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
      service.groupWithValidators.setValue({
        name: 'hello',
        password: '123456',
      });
      expect(service.groupWithValidators.valid).toBeTruthy();
    }));

    describe('name', () => {
      it('should not be empty.', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
        service.groupWithValidators.setValue({
          name: '',
          password: '123456',
        });
        expect(service.groupWithValidators.invalid).toBeTruthy();
        expect(service.groupWithValidators.get('name').invalid).toBeTruthy();
        expect(service.groupWithValidators.get('name').errors).toEqual({ required: true });
      }));

      it('should length <= 16.', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
        service.groupWithValidators.setValue({
          name: '01234567891234567',
          password: '123456',
        });
        expect(service.groupWithValidators.invalid).toBeTruthy();
        expect(service.groupWithValidators.get('name').invalid).toBeTruthy();
        expect(service.groupWithValidators.get('name').errors).toEqual({
          maxlength: {
            requiredLength: 16,
            actualLength: 17,
          }
        });
      }));
    });

    describe('password', () => {
      it('should not be empty.', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
        service.groupWithValidators.setValue({
          name: 'hello',
          password: '',
        });
        expect(service.groupWithValidators.invalid).toBeTruthy();
        expect(service.groupWithValidators.get('password').invalid).toBeTruthy();
        expect(service.groupWithValidators.get('password').errors).toEqual({ required: true });
      }));

      it('should 6 <= length <= 32.', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
        service.groupWithValidators.setValue({
          name: 'hello',
          password: '12345',
        });
        expect(service.groupWithValidators.invalid).toBeTruthy();
        expect(service.groupWithValidators.get('password').invalid).toBeTruthy();
        expect(service.groupWithValidators.get('password').errors).toEqual({
          minlength: {
            requiredLength: 6,
            actualLength: 5,
          }
        });
        service.groupWithValidators.get('password').setValue('123456789012345678901234567890123');
        expect(service.groupWithValidators.get('password').errors).toEqual({
          maxlength: {
            requiredLength: 32,
            actualLength: 33,
          }
        });
      }));
    });
  });

  describe('groupWithCustomValidators', () => {
    it('should be valid if the form is fulfilled.', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
      service.groupWithCustomValidators.setValue({
        name: 'hello',
        password: '123456',
        confirmPassword: '123456'
      });
      expect(service.groupWithCustomValidators.valid).toBeTruthy();
    }));

    describe('name', () => {
      it('should be "hello"', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
        service.groupWithCustomValidators.setValue({
          name: 'hallo',
          password: '123456',
          confirmPassword: '123456'
        })
        expect(service.groupWithCustomValidators.invalid).toBeTruthy();
        expect(service.groupWithCustomValidators.get('name').invalid).toBeTruthy();
        expect(service.groupWithCustomValidators.get('name').errors).toEqual({ hello: true });
      }));
    });

    describe('confirm password', () => {
      it('should password === confirmPassword.', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
        service.groupWithCustomValidators.setValue({
          name: 'hello',
          password: '123456',
          confirmPassword: '1234567'
        })
        expect(service.groupWithCustomValidators.invalid).toBeTruthy();
        expect(service.groupWithCustomValidators.errors).toEqual({ confirmPassword: true });
      }));
    });
  });

  describe('groupWithAsyncValidators', () => {
    it('should be pending when we set the valid email. We wait 400ms then the form will be valid.', fakeAsync(inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
      service.groupWithAsyncValidators.setValue({
        email: 'xxxx@xxxx.com',
      });
      expect(service.groupWithAsyncValidators.get('email').pending).toBeTruthy();
      tick(400);
      expect(service.groupWithAsyncValidators.get('email').pending).toBeFalsy();
      expect(service.groupWithAsyncValidators.get('email').valid).toBeTruthy();
    })));

    it('should not be pending when we set the invalid email.', inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
      service.groupWithAsyncValidators.setValue({
        email: 'xxxx',
      });
      expect(service.groupWithAsyncValidators.get('email').invalid).toBeTruthy();
      expect(service.groupWithAsyncValidators.get('email').errors).toEqual({ email: true });
      expect(service.groupWithAsyncValidators.get('email').pending).toBeFalsy();
    }));

    it('should be pending when we set the email that exists. We wait 400ms then the form will be invalid.', fakeAsync(inject([LoginFormWithValidationService], (service: LoginFormWithValidationService) => {
      service.groupWithAsyncValidators.setValue({
        email: 'foo@foo.com',
      });
      expect(service.groupWithAsyncValidators.get('email').pending).toBeTruthy();
      tick(400);
      expect(service.groupWithAsyncValidators.get('email').pending).toBeFalsy();
      expect(service.groupWithAsyncValidators.get('email').invalid).toBeTruthy();
      expect(service.groupWithAsyncValidators.get('email').errors).toEqual({ exist: true });
    })));
  });
});

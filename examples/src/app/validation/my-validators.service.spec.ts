import { TestBed, inject } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { MyValidatorsService } from './my-validators.service';
import { EmailExistsApiService } from 'app/validation/email-exists-api.service';
import { ValidationModule } from 'app/validation/validation.module';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import { ValidationTestingModule, EmailExistsApiMockService } from 'app/validation/testing/testing.module';

describe('MyValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValidationModule, ValidationTestingModule],
    });
  });

  describe('nameValidator', () => {
    it('should be valid.', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormControl('foo', validators.nameValidator);
      expect(ctrl.valid).toEqual(true);
    }));

    it('should be invalid if the value is empty.', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormControl('', validators.nameValidator);
      expect(ctrl.invalid).toEqual(true);
      expect(ctrl.errors).toEqual({ required: true });
    }));

    it('should be invalid if length of the value > 16.', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormControl('12345678901234567', validators.nameValidator);
      expect(ctrl.invalid).toEqual(true);
      expect(ctrl.errors).toEqual({
        maxlength: {
          actualLength: 17,
          requiredLength: 16,
        }
      });
    }));
  });

  describe('passwordValidator', () => {
    it('should be valid.', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormControl('123456', validators.passwordValidator);
      expect(ctrl.valid).toEqual(true);
    }));

    it('should be invalid if the value is empty.', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormControl('', validators.passwordValidator);
      expect(ctrl.invalid).toEqual(true);
      expect(ctrl.errors).toEqual({ required: true });
    }));

    it('should be invalid if length of the value > 32.', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormControl('123456789012345678901234567890123', validators.passwordValidator);
      expect(ctrl.invalid).toEqual(true);
      expect(ctrl.errors).toEqual({
        maxlength: {
          actualLength: 33,
          requiredLength: 32,
        }
      });
    }));

    it('should be invalid if length of the value < 6.', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormControl('12345', validators.passwordValidator);
      expect(ctrl.invalid).toEqual(true);
      expect(ctrl.errors).toEqual({
        minlength: {
          actualLength: 5,
          requiredLength: 6,
        }
      });
    }));
  });

  describe('passwordValidator', () => {
    it('should run the validator.', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormControl('hello', validators.helloValidator);
      expect(ctrl.valid).toEqual(true);
      ctrl.setValue('hallo');
      expect(ctrl.invalid).toEqual(true);
    }));
  });

  describe('confirmPasswordValidator', () => {
    it('should be valid', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormGroup({
        password: new FormControl('123456'),
        confirmPassword: new FormControl('123456'),
      }, validators.confirmPasswordValidator);
      expect(ctrl.valid).toEqual(true);
    }));

    it('should be invalid if password and confirmPassword do not match',
    inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormGroup({
        password: new FormControl('123456'),
        confirmPassword: new FormControl('12345'),
      }, validators.confirmPasswordValidator);
      expect(ctrl.invalid).toEqual(true);
    }));

    it('should be valid if password or confirmPassword are empty', inject([MyValidatorsService], (validators: MyValidatorsService) => {
      const ctrl = new FormGroup({
        password: new FormControl('123456'),
        confirmPassword: new FormControl(''),
      }, validators.confirmPasswordValidator);
      expect(ctrl.valid).toEqual(true);
      ctrl.setValue({ password: '', confirmPassword: '123456' });
      expect(ctrl.valid).toEqual(true);
    }));
  });

  describe('existsValidator', () => {
    it('should be pending while running the async validator', fakeAsync(inject(
      [MyValidatorsService, EmailExistsApiService],
      (validators: MyValidatorsService, emailExistsApiMock: EmailExistsApiMockService) => {
      const ctrl = new FormControl('foo@foo.com', null, validators.existsValidator);
      expect(ctrl.pending).toEqual(true);
      tick();
      expect(ctrl.pending).toEqual(false);
    })));

    it('should run the async validator', fakeAsync(inject(
      [MyValidatorsService, EmailExistsApiService],
      (validators: MyValidatorsService, emailExistsApiMock: EmailExistsApiMockService) => {
      emailExistsApiMock.nextExists = true;
      const ctrl = new FormControl('foo@foo.com', null, validators.existsValidator);
      tick();
      expect(ctrl.invalid).toEqual(true);
      expect(ctrl.errors).toEqual({ exists: true });
      emailExistsApiMock.nextExists = false;
      ctrl.setValue('bar@bar.com');
      tick();
      expect(ctrl.valid).toEqual(true);
    })));
  });
});

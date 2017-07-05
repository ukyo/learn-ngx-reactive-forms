import { TestBed, inject } from '@angular/core/testing';

import { SignupFormGroupFactoryService } from './signup-form-group-factory.service';
import { ValidationModule } from 'app/validation/validation.module';
import { FormControl } from '@angular/forms';
import { fakeAsync } from '@angular/core/testing';
import { ValidationTestingModule, EmailExistsApiMockService } from 'app/validation/testing/testing.module';
import { tick } from '@angular/core/testing';
import { EmailExistsApiService } from 'app/validation/email-exists-api.service';

describe('SignupFormGroupFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValidationModule, ValidationTestingModule]
    });
  });

  it('should create a signup form group from a model', inject([SignupFormGroupFactoryService], (factory: SignupFormGroupFactoryService) => {
    const fg = factory.create({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    expect(fg.get('name') instanceof FormControl).toEqual(true);
    expect(fg.get('email') instanceof FormControl).toEqual(true);
    expect(fg.get('password') instanceof FormControl).toEqual(true);
    expect(fg.get('confirmPassword') instanceof FormControl).toEqual(true);
  }));

  describe('name', () => {
    it('should be invalid if value is not "hello"', inject([SignupFormGroupFactoryService], (factory: SignupFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hallo',
        email: '',
        password: '',
        confirmPassword: '',
      });
      expect(fg.get('name').invalid).toEqual(true);
      expect(fg.get('name').errors).toEqual({ hello: true });
      fg.get('name').setValue('hello');
      expect(fg.get('name').valid).toEqual(true);
    }));
  });

  describe('email', () => {
    it('should be invalid if value is empty', inject([SignupFormGroupFactoryService], (factory: SignupFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hello',
        email: '',
        password: '123456',
        confirmPassword: '123456',
      });
      expect(fg.get('email').invalid).toEqual(true);
      expect(fg.get('email').errors).toEqual({ required: true });
    }));

    it('should be invalid if value is invalid format', inject([SignupFormGroupFactoryService], (factory: SignupFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hello',
        email: 'foo@',
        password: '123456',
        confirmPassword: '123456',
      });
      expect(fg.get('email').invalid).toEqual(true);
      expect(fg.get('email').errors).toEqual({ email: true });
    }));

    it('should be invalid if value is exists', fakeAsync(inject(
      [SignupFormGroupFactoryService, EmailExistsApiService],
      (factory: SignupFormGroupFactoryService, emailExistsApiMock: EmailExistsApiMockService) => {
      emailExistsApiMock.nextExists = true;
      const fg = factory.create({
        name: 'hello',
        email: 'foo@foo.com',
        password: '123456',
        confirmPassword: '123456',
      });
      expect(fg.pending).toEqual(true);
      tick();
      expect(fg.pending).toEqual(false);
      expect(fg.get('email').invalid).toEqual(true);
      expect(fg.get('email').errors).toEqual({ exists: true });
    })));

    it('should be valid if value is not exists', fakeAsync(inject(
      [SignupFormGroupFactoryService, EmailExistsApiService],
      (factory: SignupFormGroupFactoryService, emailExistsApiMock: EmailExistsApiMockService) => {
      emailExistsApiMock.nextExists = false;
      const fg = factory.create({
        name: 'hallo',
        email: 'foo@foo.com',
        password: '123456',
        confirmPassword: '123456',
      });
      expect(fg.pending).toEqual(true);
      tick();
      expect(fg.pending).toEqual(false);
      expect(fg.get('email').valid).toEqual(true);
    })));
  });

  describe('password, confirmPassword', () => {
    it('should not get confirmError if pasword === confirmPassword', inject(
      [SignupFormGroupFactoryService], (factory: SignupFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hello',
        email: '',
        password: '123456',
        confirmPassword: '123456',
      });
      expect(fg.errors).toEqual(null);
    }));

    it('should not get confirmError if pasword or confirmPassword are empty', inject(
      [SignupFormGroupFactoryService], (factory: SignupFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hello',
        email: '',
        password: '',
        confirmPassword: '',
      });
      expect(fg.errors).toEqual(null);
      fg.get('password').setValue('123456');
      expect(fg.errors).toEqual(null);
      fg.get('password').setValue('');
      fg.get('confirmPassword').setValue('123456');
      expect(fg.errors).toEqual(null);
    }));

    it('should not get confirmError if password !== confirmPassword and pasword or confirmPassword are not empty', inject(
      [SignupFormGroupFactoryService], (factory: SignupFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hello',
        email: '',
        password: '12346',
        confirmPassword: '123',
      });
      expect(fg.errors).toEqual({ confirmPassword: true });
    }));
  });
});

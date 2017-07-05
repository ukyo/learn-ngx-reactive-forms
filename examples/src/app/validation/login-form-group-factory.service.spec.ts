import { TestBed, inject } from '@angular/core/testing';
import { LoginFormGroupFactoryService } from './login-form-group-factory.service';
import { ValidationModule } from 'app/validation/validation.module';
import { FormControl } from '@angular/forms';

describe('LoginFormGroupFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValidationModule]
    });
  });

  it('should create a login form group from a model', inject([LoginFormGroupFactoryService], (factory: LoginFormGroupFactoryService) => {
    const fg = factory.create({
      name: '',
      password: '',
    });
    expect(fg.get('name') instanceof FormControl).toEqual(true);
    expect(fg.get('password') instanceof FormControl).toEqual(true);
  }));

  it('should be valid if values are filled', inject([LoginFormGroupFactoryService], (factory: LoginFormGroupFactoryService) => {
    const fg = factory.create({
      name: 'hello',
      password: '123456',
    });
    expect(fg.valid).toBe(true);
    expect(fg.get('name').valid).toEqual(true);
    expect(fg.get('password').valid).toEqual(true);
  }));

  describe('name', () => {
    it('should be invalid if value is empty', inject([LoginFormGroupFactoryService], (factory: LoginFormGroupFactoryService) => {
      const fg = factory.create({
        name: '',
        password: '123456',
      });
      expect(fg.invalid).toBe(true);
      expect(fg.get('name').invalid).toEqual(true);
      expect(fg.get('name').errors).toEqual({ required: true });
    }));

    it('should be invalid if length of value > 16', inject([LoginFormGroupFactoryService], (factory: LoginFormGroupFactoryService) => {
      const fg = factory.create({
        name: '12345678901234567',
        password: '123456',
      });
      expect(fg.invalid).toBe(true);
      expect(fg.get('name').invalid).toEqual(true);
      expect(fg.get('name').errors).toEqual({
        maxlength: {
          actualLength: 17,
          requiredLength: 16,
        }
      });
    }));
  });

  describe('password', () => {
    it('should be invalid if value is empty', inject([LoginFormGroupFactoryService], (factory: LoginFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hello',
        password: '',
      });
      expect(fg.invalid).toBe(true);
      expect(fg.get('password').invalid).toEqual(true);
      expect(fg.get('password').errors).toEqual({ required: true });
    }));

    it('should be invalid if length of value > 32', inject([LoginFormGroupFactoryService], (factory: LoginFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hello',
        password: '123456789012345678901234567890123',
      });
      expect(fg.invalid).toBe(true);
      expect(fg.get('password').invalid).toEqual(true);
      expect(fg.get('password').errors).toEqual({
        maxlength: {
          actualLength: 33,
          requiredLength: 32,
        }
      });
    }));

    it('should be invalid if length or value < 6', inject([LoginFormGroupFactoryService], (factory: LoginFormGroupFactoryService) => {
      const fg = factory.create({
        name: 'hello',
        password: '12345',
      });
      expect(fg.invalid).toBe(true);
      expect(fg.get('password').invalid).toEqual(true);
      expect(fg.get('password').errors).toEqual({
        minlength: {
          actualLength: 5,
          requiredLength: 6,
        }
      });
    }));
  });
});

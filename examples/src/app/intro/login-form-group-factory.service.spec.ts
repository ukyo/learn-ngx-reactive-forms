import { TestBed, inject } from '@angular/core/testing';

import { LoginFormGroupFactoryService } from './login-form-group-factory.service';
import { IntroModule } from 'app/intro/intro.module';

describe('LoginFormGroupFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IntroModule]
    });
  });

  it('should set name and password.', inject([LoginFormGroupFactoryService], (factory: LoginFormGroupFactoryService) => {
    const fg = factory.create({
      name: 'foo',
      password: 'bar',
    });
    expect(fg.value).toEqual({
      name: 'foo',
      password: 'bar',
    });
  }));
});

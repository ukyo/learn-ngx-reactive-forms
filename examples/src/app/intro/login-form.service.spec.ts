/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginFormService } from './login-form.service';
import { IntroModule } from "app/intro/intro.module";

describe('LoginFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ IntroModule ],
    });
  });

  it('should set name and password.', inject([LoginFormService], (loginForm: LoginFormService) => {
    expect(loginForm).toBeTruthy();
    loginForm.group.get('name').setValue('hoge taro');
    loginForm.group.get('password').setValue('123456');
    expect(loginForm.group.value).toEqual({
      name: 'hoge taro',
      password: '123456',
    });
  }));
});

import { Injectable } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import { EmailExistsApiService } from 'app/validation/email-exists-api.service';

@Injectable()
export class MyValidatorsService {

  nameValidator = Validators.compose([
    Validators.required,
    Validators.maxLength(16)
  ]);

  passwordValidator = Validators.compose([
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(32)
  ]);

  helloValidator = (c: AbstractControl) => c.value !== 'hello' ? { hello: true } : null;

  confirmPasswordValidator = (c: AbstractControl) => {
    if (!c.value.password || !c.value.confirmPassword) {
      return null;
    }
    return c.value.password !== c.value.confirmPassword ? { confirmPassword: true } : null;
  };


  existsValidator = (c: AbstractControl) => {
    return this.emailExistsApi.exists(c.value).then(exists => exists ? { exists } : null);
  };

  emailValidator = Validators.compose([
    Validators.required,
    Validators.email,
  ]);

  constructor(private emailExistsApi: EmailExistsApiService) { }
}

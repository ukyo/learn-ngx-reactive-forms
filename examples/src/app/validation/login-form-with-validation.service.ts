import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";

export const nameValidator = Validators.compose([
  Validators.required,
  Validators.maxLength(16)
]);

export const passwordValidator = Validators.compose([
  Validators.required,
  Validators.minLength(6),
  Validators.maxLength(32)
]);

const helloValidator = (c: AbstractControl) => c.value !== 'hello' ? { hello: true } : null;

const confirmPasswordValidator = (c: AbstractControl) => {
  if (!c.value.password || !c.value.confirmPassword) return null;
  return c.value.password !== c.value.confirmPassword ? { confirmPassword: true } : null;
};

const emails = ['foo@foo.com', 'bar@bar.com', 'baz@bax.com'];
const existValidator = (c: AbstractControl) => {
  return new Promise(resolve => {
    // emulate xhr.
    setTimeout(() => {
      resolve(emails.some(s => s === c.value) ? { exist: true } : null);
    }, 400);
  });
};
const emailValidator = Validators.compose([
  Validators.required,
  Validators.email,
]);

@Injectable()
export class LoginFormWithValidationService {

  groupWithValidators: FormGroup;
  groupWithCustomValidators: FormGroup;
  groupWithAsyncValidators: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initGroupWithValidators();
    this.initGroupWithCustomValidators();
    this.initGroupWithAsyncValidators();
  }

  private initGroupWithValidators() {
    this.groupWithValidators = this.fb.group({
      name: this.fb.control('', nameValidator), // set the validator to the second paramator.
      password: ['', passwordValidator] // syntax suger.
    });
  }

  private initGroupWithCustomValidators() {
    this.groupWithCustomValidators = this.fb.group({
      name: ['', helloValidator],
      password: ['', passwordValidator],
      confirmPassword: ['', Validators.required]
    }, { validator: confirmPasswordValidator });
  }

  private initGroupWithAsyncValidators() {
    this.groupWithAsyncValidators = this.fb.group({
      email: ['', emailValidator, existValidator] // set the async validator to the third paramator.
    });
  }
}

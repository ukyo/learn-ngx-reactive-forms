import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyValidatorsService } from 'app/validation/my-validators.service';

export interface SignupFormModel {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable()
export class SignupFormGroupFactoryService {

  constructor(private fb: FormBuilder, private validators: MyValidatorsService) { }

  create(model: SignupFormModel) {
    return this.fb.group({
      name: [model.name, this.validators.helloValidator],
      email: [model.email, this.validators.emailValidator, this.validators.existsValidator],
      password: [model.password, this.validators.passwordValidator],
      confirmPassword: [model.confirmPassword, Validators.required],
    }, { validator: this.validators.confirmPasswordValidator });
  }
}

import { Injectable } from '@angular/core';
import { MyValidatorsService } from 'app/validation/my-validators.service';
import { FormBuilder } from '@angular/forms';

export interface LoginFormModel {
  name: string;
  password: string;
}

@Injectable()
export class LoginFormGroupFactoryService {
  constructor(
    private validators: MyValidatorsService,
    private fb: FormBuilder,
  ) { }

  create(model: LoginFormModel) {
    return this.fb.group({
      name: this.fb.control(model.name, this.validators.nameValidator),
      password: [model.password, this.validators.passwordValidator],
    });
  }
}

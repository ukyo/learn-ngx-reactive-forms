import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MyValidatorsService } from "app/validation/my-validators.service";

export interface LoginFormModel {
  name: string;
  password: string;
}

@Injectable()
export class LoginFormGroupWithDefaultValidatorFactoryService {

  constructor(
    private validators: MyValidatorsService,
    private fb: FormBuilder
  ) { }

  create(model: LoginFormModel) {
    return this.fb.group({
      name: this.fb.control(model.name, this.validators.nameValidator),
      password: [model.password, this.validators.passwordValidator]
    });
  }
}


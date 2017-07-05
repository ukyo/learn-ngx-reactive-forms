import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class LoginFormGroupFactoryService {

  constructor(private fb: FormBuilder) { }

  create(model: { name: string, password: string }) {
    return this.fb.group({
      name: this.fb.control(model.name),
      password: model.password,
    })
  }
}

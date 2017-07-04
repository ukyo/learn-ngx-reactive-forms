import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable()
export class LoginFormService {

  group: FormGroup;

  constructor(fb: FormBuilder) {
    this.group = fb.group({
      name: fb.control(''),
      password: fb.control(''),
    });
  }

}

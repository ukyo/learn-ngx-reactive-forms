import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";

@Injectable()
export class LoginFormWithValidationService {

  groupWithValidators: FormGroup;
  groupWithCustomValidators: FormGroup;
  groupWithAsyncValidators: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.initGroupWithValidators();
    // this.initGroupWithCustomValidators();
    // this.initGroupWithAsyncValidators();
  }

  // private initGroupWithValidators() {
  //   this.groupWithValidators = this.fb.group({
  //     name: this.fb.control('', nameValidator), // set the validator to the second paramator.
  //     password: ['', passwordValidator] // syntax suger.
  //   });
  // }

  // private initGroupWithCustomValidators() {
  //   this.groupWithCustomValidators = this.fb.group({
  //     name: ['', helloValidator],
  //     password: ['', passwordValidator],
  //     confirmPassword: ['', Validators.required]
  //   }, { validator: confirmPasswordValidator });
  // }

  // private initGroupWithAsyncValidators() {
  //   this.groupWithAsyncValidators = this.fb.group({
  //     email: ['', emailValidator, existValidator] // set the async validator to the third paramator.
  //   });
  // }
}

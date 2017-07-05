import { Component, OnInit } from '@angular/core';
import { SignupFormGroupFactoryService } from 'app/validation/signup-form-group-factory.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupFormGroup: FormGroup;

  constructor(signupFormGroupFactory: SignupFormGroupFactoryService) {
    this.signupFormGroup = signupFormGroupFactory.create({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/forms';
import { LoginFormGroupFactoryService } from 'app/intro/login-form-group-factory.service';

@Component({
  selector: 'my-first-form-group',
  templateUrl: './my-first-form-group.component.html',
  styleUrls: ['./my-first-form-group.component.css']
})
export class MyFirstFormGroupComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(loginFormGroupFactory: LoginFormGroupFactoryService) {
    this.loginFormGroup = loginFormGroupFactory.create({
      name: 'foo',
      password: '',
    });
  }

  ngOnInit() {
  }

}

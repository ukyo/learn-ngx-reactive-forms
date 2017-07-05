import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginFormGroupFactoryService } from 'app/validation/login-form-group-factory.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(loginFormGroupFactory: LoginFormGroupFactoryService) {
    this.loginFormGroup = loginFormGroupFactory.create({
      name: '',
      password: ''
    });
  }

  ngOnInit() {
  }

}

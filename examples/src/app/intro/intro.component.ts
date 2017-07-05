import { Component, OnInit } from '@angular/core';
import { LoginFormGroupFactoryService } from 'app/intro/login-form-group-factory.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

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

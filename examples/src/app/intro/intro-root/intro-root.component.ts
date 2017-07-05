import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginFormGroupFactoryService } from 'app/intro/login-form-group-factory.service';

@Component({
  selector: 'intro-root',
  templateUrl: './intro-root.component.html',
  styleUrls: ['./intro-root.component.css']
})
export class IntroRootComponent implements OnInit {

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

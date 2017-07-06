import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginFormGroupFactoryService } from 'app/intro/login-form-group-factory.service';

@Component({
  selector: 'touched-and-dirty',
  templateUrl: './touched-and-dirty.component.html',
  styleUrls: ['./touched-and-dirty.component.css']
})
export class TouchedAndDirtyComponent implements OnInit {

  formGroup1: FormGroup;
  formGroup2: FormGroup;

  constructor(loginFormGroupFactory: LoginFormGroupFactoryService) {
    this.formGroup1 = loginFormGroupFactory.create({
      name: '',
      password: '',
    });
    this.formGroup2 = loginFormGroupFactory.create({
      name: '',
      password: '',
    });
  }

  ngOnInit() {
  }

}

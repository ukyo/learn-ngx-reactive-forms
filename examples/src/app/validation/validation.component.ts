import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { LoginFormGroupWithDefaultValidatorFactoryService } from "app/validation/login-form-group-with-default-validator-factory.service";

@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  loginFormWithDefaultValidator: FormGroup;
  
  constructor(
    private loginFormGroupWithDefaultValidatorFactory: LoginFormGroupWithDefaultValidatorFactoryService,
  ) {
    this.loginFormWithDefaultValidator = this.loginFormGroupWithDefaultValidatorFactory.create({
      name: '',
      password: ''
    });
  }

  ngOnInit() {
    
  }

}

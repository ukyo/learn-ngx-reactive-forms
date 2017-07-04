import { Component, OnInit } from '@angular/core';
import { LoginFormWithValidationService } from "app/validation/login-form-with-validation.service";

@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor(public loginFormWithValidation: LoginFormWithValidationService) { }

  ngOnInit() {
  }

}

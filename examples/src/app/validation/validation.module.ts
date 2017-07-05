import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationRoutingModule } from './validation-routing.module';
import { ValidationComponent } from './validation.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormWithValidationService } from "app/validation/login-form-with-validation.service";
import { LoginFormGroupWithDefaultValidatorFactoryService } from "app/validation/login-form-group-with-default-validator-factory.service";
import { EmailExistsApiService } from "app/validation/email-exists-api.service";
import { MyValidatorsService } from "app/validation/my-validators.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationRoutingModule
  ],
  declarations: [ValidationComponent],
  providers: [
    LoginFormWithValidationService,
    LoginFormGroupWithDefaultValidatorFactoryService,
    EmailExistsApiService,
    MyValidatorsService,
  ]
})
export class ValidationModule { }

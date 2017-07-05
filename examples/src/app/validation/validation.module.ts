import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationRoutingModule } from './validation-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailExistsApiService } from 'app/validation/email-exists-api.service';
import { MyValidatorsService } from 'app/validation/my-validators.service';
import { LoginFormGroupFactoryService } from 'app/validation/login-form-group-factory.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupFormGroupFactoryService } from 'app/validation/signup-form-group-factory.service';
import { RouterModule } from '@angular/router';
import { ValidationRootComponent } from './validation-root/validation-root.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ValidationRoutingModule,
  ],
  declarations: [LoginFormComponent, SignupFormComponent, ValidationRootComponent],
  providers: [
    LoginFormGroupFactoryService,
    SignupFormGroupFactoryService,
    EmailExistsApiService,
    MyValidatorsService,
  ]
})
export class ValidationModule { }

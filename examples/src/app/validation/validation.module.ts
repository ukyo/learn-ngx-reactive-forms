import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationRoutingModule } from './validation-routing.module';
import { ValidationComponent } from './validation.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormWithValidationService } from "app/validation/login-form-with-validation.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationRoutingModule
  ],
  declarations: [ValidationComponent],
  providers: [LoginFormWithValidationService]
})
export class ValidationModule { }

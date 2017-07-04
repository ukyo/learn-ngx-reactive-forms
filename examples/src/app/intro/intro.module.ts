import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormService } from "app/intro/login-form.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IntroRoutingModule
  ],
  declarations: [IntroComponent],
  providers: [LoginFormService],
})
export class IntroModule { }

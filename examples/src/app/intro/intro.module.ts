import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormGroupFactoryService } from 'app/intro/login-form-group-factory.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IntroRoutingModule
  ],
  declarations: [IntroComponent],
  providers: [LoginFormGroupFactoryService],
})
export class IntroModule { }

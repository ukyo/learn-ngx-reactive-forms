import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroRoutingModule } from './intro-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormGroupFactoryService } from 'app/intro/login-form-group-factory.service';
import { IntroRootComponent } from './intro-root/intro-root.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IntroRoutingModule
  ],
  declarations: [IntroRootComponent],
  providers: [LoginFormGroupFactoryService],
})
export class IntroModule { }

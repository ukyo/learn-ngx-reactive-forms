import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroRoutingModule } from './intro-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormGroupFactoryService } from 'app/intro/login-form-group-factory.service';
import { IntroRootComponent } from './intro-root/intro-root.component';
import { MyFirstFormGroupComponent } from './my-first-form-group/my-first-form-group.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { NestedFormGroupFactoryService } from 'app/intro/nested-form-group-factory.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IntroRoutingModule
  ],
  declarations: [IntroRootComponent, MyFirstFormGroupComponent, NestedFormComponent],
  providers: [LoginFormGroupFactoryService, NestedFormGroupFactoryService],
})
export class IntroModule { }

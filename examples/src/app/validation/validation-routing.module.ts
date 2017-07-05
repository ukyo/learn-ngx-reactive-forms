import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from 'app/validation/login-form/login-form.component';
import { SignupFormComponent } from 'app/validation/signup-form/signup-form.component';
import { ValidationRootComponent } from 'app/validation/validation-root/validation-root.component';

const routes: Routes = [
  {
    path: '',
    component: ValidationRootComponent,
    children: [
      {
        path: 'login-form',
        component: LoginFormComponent,
      },
      {
        path: 'signup-form',
        component: SignupFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ValidationRoutingModule { }

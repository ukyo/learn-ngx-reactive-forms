import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroModule } from 'app/intro/intro.module';
import { ValidationModule } from 'app/validation/validation.module';
import { ObservableModule } from 'app/observable/observable.module';
import { OtherStatusesModule } from 'app/other-statuses/other-statuses.module';
import { ComplexFormModule } from 'app/complex-form/complex-form.module';

export function loadIntroModule() {
  return IntroModule;
}

export function loadValidationModule() {
  return ValidationModule;
}

export function loadObservableModule() {
  return ObservableModule;
}

export function loadOtherStatusesModule() {
  return OtherStatusesModule;
}

export function loadComplexFormModule() {
  return ComplexFormModule;
}

export const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'intro',
    loadChildren: loadIntroModule,
  },
  {
    path: 'validation',
    loadChildren: loadValidationModule,
  },
  {
    path: 'observable',
    loadChildren: loadObservableModule,
  },
  {
    path: 'other-statuses',
    loadChildren: loadOtherStatusesModule,
  },
  {
    path: 'complex-form',
    loadChildren: loadComplexFormModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

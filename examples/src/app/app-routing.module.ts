import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroModule } from 'app/intro/intro.module';
import { ValidationModule } from 'app/validation/validation.module';

export function loadIntroModule() {
  return IntroModule;
}

export function loadValidationModule() {
  return ValidationModule;
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

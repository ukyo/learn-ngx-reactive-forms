import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroModule } from "app/intro/intro.module";
import { ValidationModule } from "app/validation/validation.module";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'intro',
    loadChildren: () => IntroModule,
  },
  {
    path: 'validation',
    loadChildren: () => ValidationModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

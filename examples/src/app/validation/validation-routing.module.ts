import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationComponent } from "app/validation/validation.component";

const routes: Routes = [
  {
    path: '',
    component: ValidationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ValidationRoutingModule { }

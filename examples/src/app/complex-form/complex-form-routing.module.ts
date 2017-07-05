import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplexFormRootComponent } from 'app/complex-form/complex-form-root/complex-form-root.component';
import { FormFieldSplittingComponent } from 'app/complex-form/form-field-splitting/form-field-splitting.component';
import { DynamicFieldsComponent } from 'app/complex-form/dynamic-fields/dynamic-fields.component';
import { RecursiveFormComponent } from 'app/complex-form/recursive-form/recursive-form.component';

const routes: Routes = [
  {
    path: '',
    component: ComplexFormRootComponent,
    children: [
      {
        path: 'form-field-splitting',
        component: FormFieldSplittingComponent,
      },
      {
        path: 'dynamic-fields',
        component: DynamicFieldsComponent,
      },
      {
        path: 'recursive-form',
        component: RecursiveFormComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplexFormRoutingModule { }

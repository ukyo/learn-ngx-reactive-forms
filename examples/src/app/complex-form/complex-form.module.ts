import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { ComplexFormRootComponent } from './complex-form-root/complex-form-root.component';
import { FormFieldSplittingComponent } from './form-field-splitting/form-field-splitting.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';
import { RecursiveFormComponent } from './recursive-form/recursive-form.component';

@NgModule({
  imports: [
    CommonModule,
    ComplexFormRoutingModule
  ],
  declarations: [ComplexFormRootComponent, FormFieldSplittingComponent, DynamicFieldsComponent, RecursiveFormComponent]
})
export class ComplexFormModule { }

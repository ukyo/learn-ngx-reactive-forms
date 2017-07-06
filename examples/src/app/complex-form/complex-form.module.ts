import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { ComplexFormRootComponent } from './complex-form-root/complex-form-root.component';
import { FormFieldSplittingComponent } from './form-field-splitting/form-field-splitting.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';
import { RecursiveFormComponent } from './recursive-form/recursive-form.component';
import { ProductFormFieldComponent } from './product-form-field/product-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormGroupFactoryService } from 'app/complex-form/product-form-group-factory.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComplexFormRoutingModule,
  ],
  declarations: [
    ComplexFormRootComponent,
    FormFieldSplittingComponent,
    DynamicFieldsComponent,
    RecursiveFormComponent,
    ProductFormFieldComponent,
  ],
  providers: [
    ProductFormGroupFactoryService,
  ]
})
export class ComplexFormModule { }

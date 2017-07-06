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
import { SimpleRecursiveFormComponent } from './simple-recursive-form/simple-recursive-form.component';
import { SimpleRecursiveFormGroupFactoryService } from 'app/complex-form/simple-recursive-form-group-factory.service';

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
    SimpleRecursiveFormComponent,
  ],
  providers: [
    ProductFormGroupFactoryService,
    SimpleRecursiveFormGroupFactoryService,
  ]
})
export class ComplexFormModule { }

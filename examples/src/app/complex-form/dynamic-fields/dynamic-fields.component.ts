import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { ProductFormGroupFactoryService } from 'app/complex-form/product-form-group-factory.service';

@Component({
  selector: 'dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.css']
})
export class DynamicFieldsComponent implements OnInit {

  formGroup: FormGroup;
  productsCtrl: FormArray;
  constructor(
    private fb: FormBuilder,
    private productFormGroupFactory: ProductFormGroupFactoryService,
  ) {
    this.productsCtrl = this.fb.array([
      this.productFormGroupFactory.create({ name: 'starter', price: 5 }),
      this.productFormGroupFactory.create({ name: 'pro', price: 100 }),
    ]);
    this.formGroup = this.fb.group({
      products: this.productsCtrl
    });
  }

  ngOnInit() {
  }

  removeField(index: number) {
    this.productsCtrl.removeAt(index);
    this.productsCtrl.markAsDirty();
    this.productsCtrl.markAsTouched();
  }

  addField() {
    this.productsCtrl.push(this.productFormGroupFactory.create({
      name: '',
      price: 0,
    }));
    this.productsCtrl.markAsDirty();
    this.productsCtrl.markAsTouched();
  }
}

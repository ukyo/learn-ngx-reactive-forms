import { Component, OnInit } from '@angular/core';
import { ProductFormGroupFactoryService } from "app/complex-form/product-form-group-factory.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'form-field-splitting',
  templateUrl: './form-field-splitting.component.html',
  styleUrls: ['./form-field-splitting.component.css']
})
export class FormFieldSplittingComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    fb: FormBuilder,
    productFormGroupFactory: ProductFormGroupFactoryService,
  ) {
    this.formGroup = fb.group({
      products: fb.array([
        productFormGroupFactory.create({ name: 'apple', price: 100 }),
        productFormGroupFactory.create({ name: 'orange', price: 200 }),
      ])
    });
  }

  ngOnInit() {
  }

}

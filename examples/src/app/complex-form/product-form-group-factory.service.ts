import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface Product {
  name: string;
  price: number;
}

@Injectable()
export class ProductFormGroupFactoryService {

  constructor(private fb: FormBuilder) { }

  create(product: Product) {
    return this.fb.group({
      name: [product.name, Validators.required],
      price: [product.price, Validators.required],
    })
  }
}
